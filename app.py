from flask import Flask, render_template, request, redirect
from bokeh.resources import CDN
import json

from bokeh.embed import components

from bokeh.embed import autoload_static
from bokeh.embed import file_html

from bokeh.plotting import figure

from global_fcns import ticker_retrieval
from global_vbls import quandl_key

app = Flask(__name__)

# Create app attribute caled 'vars,' which will hold form responses. Initialize with default values
app.vars = {'start_date':'2019-01-01','end_date':'2019-02-28','stock_code':'AAPL'}

@app.route('/')
def index():
    
    # Retrieve ticker data, create plot
    try: 
        tr = ticker_retrieval(app.vars['stock_code'],app.vars['start_date'],app.vars['end_date'],quandl_key)
        tr.get_ticker_data()
    except: 
        tr = ticker_retrieval('AAPL',app.vars['start_date'],app.vars['end_date'],quandl_key)
        tr.get_ticker_data()
    p = tr.create_plot()

    # Create scripts
    js_path = "/Users/Lucien/Documents/TDI/twelve_day_program/stock-ticker-app/js_bokeh_plots"
    js,tag = autoload_static(p,CDN,js_path)
    with open(js_path+"/ticker_plot.js",'w') as f: 
        f.write(js)
        
    with open("plot.html",'w') as f: 
        f.write(file_html(p, CDN, "my_plot"))
    
    #return render_template('index.html',script_tag=tag,bokeh_resources=CDN.render())
    
    # Stuff for embedding bokeh plot in webpage, using HTML. 
    script, div = components(p)
    return render_template('index.html',script_tag=tag,script=script,div=div,bokeh_resources=CDN.render())


@app.route('/submit_tick',methods=['POST'])
def submit_tick():
    
    # Save the form responses to the app.vars attribute. 
    app.vars['start_date'] = request.form['start_date']
    app.vars['end_date'] = request.form['end_date']
    app.vars['stock_code'] = request.form['stock_code']
    
    # Then re-direct to the index page (will now display the new plot). 
    return redirect('/')

if __name__ == "__main__": 
    app.run(debug=True,port=33507)
    