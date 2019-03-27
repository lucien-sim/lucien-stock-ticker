from flask import Flask, render_template, request, redirect
from bokeh.resources import CDN
from bokeh.embed import components
from global_fcns import ticker_retrieval
from global_vbls import quandl_key
import os

app = Flask(__name__)

@app.route('/')
def index():
    
    try: 
        # Retrieve ticker data, create plot
        tr = ticker_retrieval('AAPL','2019-01-01','2019-01-31',quandl_key)
        tr.get_ticker_data()
        p = tr.create_plot()
        # Stuff for embedding bokeh plot in webpage. 
        script, div = components(p)
    except: 
        # If data retrieval was unsuccessful, print an error in place of the plot! 
        script = ""
        div = r"<div><p>Error! Stock code was entered incorrectly OR data is unavailable for the entered stock.</p></div>"
    
    return render_template('index.html',script=script,div=div,bokeh_resources=CDN.render(),
                           st_date='2019-01-01',ed_date='2019-01-31',
                           scode='AAPL')


@app.route('/submit_tick',methods=['POST'])
def submit_tick():
    
    # Save the form responses to the appvars attribute. 
    appvars = {}
    appvars['start_date'] = request.form.get('start_date')
    appvars['end_date'] = request.form.get('end_date')
    appvars['stock_code'] = request.form.get('stock_code')
        
    try: 
        # Retrieve ticker data, create plot
        tr = ticker_retrieval(appvars['stock_code'],appvars['start_date'],appvars['end_date'],quandl_key)
        tr.get_ticker_data()
        p = tr.create_plot()
        # Stuff for embedding bokeh plot in webpage. 
        script, div = components(p)
    except: 
        # If data retrieval was unsuccessful, print an error in place of the plot! 
        script = ""
        div = r"<div><p>Error! Stock code was entered incorrectly OR data is unavailable for the entered stock.</p></div>"
    
    return render_template('index.html',script=script,div=div,bokeh_resources=CDN.render(),
                           st_date=appvars['start_date'],ed_date=appvars['end_date'],
                           scode=appvars['stock_code'])

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)    