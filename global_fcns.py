import pandas as pd
import requests
import simplejson as json

from bokeh.io import output_notebook, show
from bokeh.plotting import figure
from bokeh.models.tools import HoverTool
from bokeh.models.formatters import DatetimeTickFormatter
from bokeh.models import ColumnDataSource

class ticker_retrieval(): 
    
    def __init__(self,stock_code,start_date,end_date,api_key):
        self.stock_code = stock_code
        self.start_date = start_date
        self.end_date = end_date
        self.api_key = api_key
        
    def get_ticker_data(self):
        
        # Get data from API
        dataset = 'EOD'
        column_index = '4'
        req = "https://www.quandl.com/api/v3/datasets/%s/%s.json?column_index=%s&start_date=%s&end_date=%s&api_key=%s"%(dataset,self.stock_code,column_index,self.start_date,self.end_date,self.api_key)
        r = requests.get(req)
        data = json.loads(r.text)
        
        # Place data in dataframe. 
        close_dict = {'Date':[],self.stock_code:[]}
        for date,close in data['dataset']['data']: 
            datestr = pd.Timestamp(date)
            close_dict['Date'].append(datestr)
            close_dict[self.stock_code].append(close)
        close_prices = pd.DataFrame(close_dict)
        close_prices['date_str'] = close_prices['Date'].dt.strftime('%Y-%m-%d')
        close_prices = close_prices.set_index('Date')
        
        # Save data as attribute. 
        self.close_prices = close_prices
        
        return
        
    def create_plot(self): 
        
        # Determine length of time series (in days)
        len_ts = self.close_prices.index.max()-self.close_prices.index.min()
        
        # Initialize the figure
        p = figure(plot_width=800,plot_height=300,x_axis_type="datetime",
                   tools='pan,wheel_zoom,box_zoom,reset,previewsave')

        # Always plot the time series as a line. 
        lr = p.line('Date',self.stock_code,source=ColumnDataSource(self.close_prices),color='red',line_width=2,alpha=1)

        # Also plot circles if displaying less than 6 months of data. 
        if len_ts<=pd.Timedelta('183 days'): 
            cr = p.circle('Date',self.stock_code,source=ColumnDataSource(self.close_prices),size=12,
                          fill_color='grey',fill_alpha=0.25,hover_color='green',
                          hover_alpha=0.5,line_color=None,hover_line_color=None)

        # Add axis names
        p.xaxis.axis_label = "Date"
        p.yaxis.axis_label = self.stock_code+" closing price"
        
        # Create outline for the plot
        p.outline_line_width = 1
        p.outline_line_alpha = 1
        p.outline_line_color = "black"

        # Format the x axis ticks. 
        p.xaxis.formatter = DatetimeTickFormatter(
            hours=["%Y-%m-%d"],
            days=["%Y-%m-%d"],
            months=["%Y-%m-%d"],
            years=["%Y-%m-%d"],
        )

        # Format the hover tool output. 
        tooltips = [('date','@date_str'),('closing','@'+self.stock_code)]
        if len_ts<=pd.Timedelta('183 days'): 
            p.add_tools(HoverTool(tooltips=tooltips, renderers=[cr], mode='mouse'))
        else: 
            p.add_tools(HoverTool(tooltips=tooltips, renderers=[lr], mode='mouse'))
        
        return p