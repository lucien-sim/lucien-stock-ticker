from flask import Flask, render_template, request, redirect
from bokeh.resources import CDN
from bokeh.embed import components
from global_fcns import ticker_retrieval
from global_vbls import quandl_key

app = Flask(__name__)

# Create app attribute caled 'vars,' which will hold form responses. Initialize with default values
app.vars = {'start_date':'2019-01-01','end_date':'2019-01-31','stock_code':'AAPL'}

@app.route('/')
def index():
    
    try: 
        # Retrieve ticker data, create plot
        tr = ticker_retrieval(app.vars['stock_code'],app.vars['start_date'],app.vars['end_date'],quandl_key)
        tr.get_ticker_data()
        p = tr.create_plot()
        # Stuff for embedding bokeh plot in webpage. 
        script, div = components(p)
    except: 
        # If data retrieval was unsuccessful, print an error in place of the plot! 
        script = ""
        div = r"<div><p>Error! Stock code was entered incorrectly OR data is unavailable for the entered stock.</p><div>"
    
    return render_template('index.html',script=script,div=div,bokeh_resources=CDN.render(),st_date=app.vars['start_date'],ed_date=app.vars['end_date'],scode=app.vars['stock_code'])

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
    