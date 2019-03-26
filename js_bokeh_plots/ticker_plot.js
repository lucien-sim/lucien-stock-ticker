(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("8d2de964-41f9-405f-9cac-1f4e14109a7d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d2de964-41f9-405f-9cac-1f4e14109a7d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e442b01a-5cd6-4fb9-894d-394452d2be44":{"roots":{"references":[{"attributes":{"line_color":"red","line_width":2,"x":{"field":"Date"},"y":{"field":"HD"}},"id":"3045","type":"Line"},{"attributes":{"data_source":{"id":"3043","type":"ColumnDataSource"},"glyph":{"id":"3045","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3046","type":"Line"},"selection_glyph":null,"view":{"id":"3048","type":"CDSView"}},"id":"3047","type":"GlyphRenderer"},{"attributes":{},"id":"3016","type":"LinearScale"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"3068","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"3066","type":"AdaptiveTicker"},{"attributes":{"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3021","type":"DatetimeTicker"}},"id":"3024","type":"Grid"},{"attributes":{"callback":null},"id":"3014","type":"DataRange1d"},{"attributes":{"callback":null,"renderers":[{"id":"3054","type":"GlyphRenderer"}],"tooltips":[["date","@date_str"],["closing","@HD"]]},"id":"3058","type":"HoverTool"},{"attributes":{"days":["%Y-%m-%d"],"hours":["%Y-%m-%d"],"months":["%Y-%m-%d"],"years":["%Y-%m-%d"]},"id":"3056","type":"DatetimeTickFormatter"},{"attributes":{"days":[1,15]},"id":"3071","type":"DaysTicker"},{"attributes":{},"id":"3018","type":"LinearScale"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"3073","type":"MonthsTicker"},{"attributes":{},"id":"3026","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"3060","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3026","type":"BasicTicker"}},"id":"3029","type":"Grid"},{"attributes":{"mantissas":[1,2,5],"max_interval":500.0,"num_minor_ticks":0},"id":"3065","type":"AdaptiveTicker"},{"attributes":{"callback":null,"data":{"Date":{"__ndarray__":"AABAaRaTdkIAAIADxJJ2QgAAwJ1xknZCAAAAOB+SdkIAAMAGKJF2QgAAAKHVkHZCAABAO4OQdkIAAIDVMJB2QgAAgD7njnZCAADA2JSOdkIAAABzQo52QgAAQA3wjXZCAACAp52NdkIAAEB2pox2QgAAgBBUjHZCAADAqgGMdkIAAABFr4t2QgAAQN9ci3ZCAAAArmWKdkIAAEBIE4p2QgAAgOLAiXZCAADAfG6JdkIAAAAXHIl2QgAAwOUkiHZCAAAAgNKHdkIAAEAagId2QgAAgLQth3ZCAACAHeSFdkIAAMC3kYV2QgAAAFI/hXZCAABA7OyEdkIAAICGmoR2QgAAQFWjg3ZCAACA71CDdkIAAMCJ/oJ2QgAAACSsgnZCAABAvlmCdkIAAACNYoF2QgAAQCcQgXZCAACAwb2AdkI=","dtype":"float64","shape":[40]},"HD":{"__ndarray__":"FK5H4XokZ0A9CtejcPVmQJqZmZmZiWdAj8L1KFy/Z0AUrkfhegxoQArXo3A9+mdAMzMzMzP7Z0DD9ShcjwpoQBSuR+F6DGhAH4XrUbh2Z0CF61G4Ho1nQHE9CtejMGdAPQrXo3DdZkDhehSuRxFnQArXo3A9AmdA16NwPQoXZ0AUrkfhekxnQPYoXI/CTWdApHA9CtcLZ0ApXI/C9fBmQPYoXI/CxWZArkfhehR2ZkDD9Shcj3pmQM3MzMzMjGZA4XoUrkcpZkAUrkfhehxmQOxRuB6FI2ZAw/UoXI9yZkCkcD0K19tlQOF6FK5HIWZA16NwPQoPZkBSuB6F61lmQIXrUbgebWZAUrgehethZkCPwvUoXHdmQBSuR+F6PGZA4XoUrkchZkCkcD0K17NlQOxRuB6FE2VAhetRuB6NZUA=","dtype":"float64","shape":[40]},"date_str":["2019-02-28","2019-02-27","2019-02-26","2019-02-25","2019-02-22","2019-02-21","2019-02-20","2019-02-19","2019-02-15","2019-02-14","2019-02-13","2019-02-12","2019-02-11","2019-02-08","2019-02-07","2019-02-06","2019-02-05","2019-02-04","2019-02-01","2019-01-31","2019-01-30","2019-01-29","2019-01-28","2019-01-25","2019-01-24","2019-01-23","2019-01-22","2019-01-18","2019-01-17","2019-01-16","2019-01-15","2019-01-14","2019-01-11","2019-01-10","2019-01-09","2019-01-08","2019-01-07","2019-01-04","2019-01-03","2019-01-02"]},"selected":{"id":"3080","type":"Selection"},"selection_policy":{"id":"3079","type":"UnionRenderers"}},"id":"3049","type":"ColumnDataSource"},{"attributes":{},"id":"3063","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"3037","type":"BoxAnnotation"}},"id":"3032","type":"BoxZoomTool"},{"attributes":{"num_minor_ticks":5,"tickers":[{"id":"3065","type":"AdaptiveTicker"},{"id":"3066","type":"AdaptiveTicker"},{"id":"3067","type":"AdaptiveTicker"},{"id":"3068","type":"DaysTicker"},{"id":"3069","type":"DaysTicker"},{"id":"3070","type":"DaysTicker"},{"id":"3071","type":"DaysTicker"},{"id":"3072","type":"MonthsTicker"},{"id":"3073","type":"MonthsTicker"},{"id":"3074","type":"MonthsTicker"},{"id":"3075","type":"MonthsTicker"},{"id":"3076","type":"YearsTicker"}]},"id":"3021","type":"DatetimeTicker"},{"attributes":{"axis_label":"Date","formatter":{"id":"3056","type":"DatetimeTickFormatter"},"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3021","type":"DatetimeTicker"}},"id":"3020","type":"DatetimeAxis"},{"attributes":{"months":[0,4,8]},"id":"3074","type":"MonthsTicker"},{"attributes":{"source":{"id":"3043","type":"ColumnDataSource"}},"id":"3048","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"green"},"line_alpha":{"value":0.5},"line_color":{"value":null},"size":{"units":"screen","value":12},"x":{"field":"Date"},"y":{"field":"HD"}},"id":"3053","type":"Circle"},{"attributes":{},"id":"3077","type":"UnionRenderers"},{"attributes":{},"id":"3033","type":"ResetTool"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"3069","type":"DaysTicker"},{"attributes":{"below":[{"id":"3020","type":"DatetimeAxis"}],"left":[{"id":"3025","type":"LinearAxis"}],"outline_line_color":{"value":"black"},"plot_height":300,"plot_width":800,"renderers":[{"id":"3020","type":"DatetimeAxis"},{"id":"3024","type":"Grid"},{"id":"3025","type":"LinearAxis"},{"id":"3029","type":"Grid"},{"id":"3037","type":"BoxAnnotation"},{"id":"3047","type":"GlyphRenderer"},{"id":"3054","type":"GlyphRenderer"}],"title":{"id":"3060","type":"Title"},"toolbar":{"id":"3035","type":"Toolbar"},"x_range":{"id":"3012","type":"DataRange1d"},"x_scale":{"id":"3016","type":"LinearScale"},"y_range":{"id":"3014","type":"DataRange1d"},"y_scale":{"id":"3018","type":"LinearScale"}},"id":"3011","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"Date":{"__ndarray__":"AABAaRaTdkIAAIADxJJ2QgAAwJ1xknZCAAAAOB+SdkIAAMAGKJF2QgAAAKHVkHZCAABAO4OQdkIAAIDVMJB2QgAAgD7njnZCAADA2JSOdkIAAABzQo52QgAAQA3wjXZCAACAp52NdkIAAEB2pox2QgAAgBBUjHZCAADAqgGMdkIAAABFr4t2QgAAQN9ci3ZCAAAArmWKdkIAAEBIE4p2QgAAgOLAiXZCAADAfG6JdkIAAAAXHIl2QgAAwOUkiHZCAAAAgNKHdkIAAEAagId2QgAAgLQth3ZCAACAHeSFdkIAAMC3kYV2QgAAAFI/hXZCAABA7OyEdkIAAICGmoR2QgAAQFWjg3ZCAACA71CDdkIAAMCJ/oJ2QgAAACSsgnZCAABAvlmCdkIAAACNYoF2QgAAQCcQgXZCAACAwb2AdkI=","dtype":"float64","shape":[40]},"HD":{"__ndarray__":"FK5H4XokZ0A9CtejcPVmQJqZmZmZiWdAj8L1KFy/Z0AUrkfhegxoQArXo3A9+mdAMzMzMzP7Z0DD9ShcjwpoQBSuR+F6DGhAH4XrUbh2Z0CF61G4Ho1nQHE9CtejMGdAPQrXo3DdZkDhehSuRxFnQArXo3A9AmdA16NwPQoXZ0AUrkfhekxnQPYoXI/CTWdApHA9CtcLZ0ApXI/C9fBmQPYoXI/CxWZArkfhehR2ZkDD9Shcj3pmQM3MzMzMjGZA4XoUrkcpZkAUrkfhehxmQOxRuB6FI2ZAw/UoXI9yZkCkcD0K19tlQOF6FK5HIWZA16NwPQoPZkBSuB6F61lmQIXrUbgebWZAUrgehethZkCPwvUoXHdmQBSuR+F6PGZA4XoUrkchZkCkcD0K17NlQOxRuB6FE2VAhetRuB6NZUA=","dtype":"float64","shape":[40]},"date_str":["2019-02-28","2019-02-27","2019-02-26","2019-02-25","2019-02-22","2019-02-21","2019-02-20","2019-02-19","2019-02-15","2019-02-14","2019-02-13","2019-02-12","2019-02-11","2019-02-08","2019-02-07","2019-02-06","2019-02-05","2019-02-04","2019-02-01","2019-01-31","2019-01-30","2019-01-29","2019-01-28","2019-01-25","2019-01-24","2019-01-23","2019-01-22","2019-01-18","2019-01-17","2019-01-16","2019-01-15","2019-01-14","2019-01-11","2019-01-10","2019-01-09","2019-01-08","2019-01-07","2019-01-04","2019-01-03","2019-01-02"]},"selected":{"id":"3078","type":"Selection"},"selection_policy":{"id":"3077","type":"UnionRenderers"}},"id":"3043","type":"ColumnDataSource"},{"attributes":{"days":[1,8,15,22]},"id":"3070","type":"DaysTicker"},{"attributes":{},"id":"3078","type":"Selection"},{"attributes":{"axis_label":"HD closing price","formatter":{"id":"3063","type":"BasicTickFormatter"},"plot":{"id":"3011","subtype":"Figure","type":"Plot"},"ticker":{"id":"3026","type":"BasicTicker"}},"id":"3025","type":"LinearAxis"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"3067","type":"AdaptiveTicker"},{"attributes":{},"id":"3076","type":"YearsTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"Date"},"y":{"field":"HD"}},"id":"3046","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3030","type":"PanTool"},{"id":"3031","type":"WheelZoomTool"},{"id":"3032","type":"BoxZoomTool"},{"id":"3033","type":"ResetTool"},{"id":"3034","type":"SaveTool"},{"id":"3058","type":"HoverTool"}]},"id":"3035","type":"Toolbar"},{"attributes":{},"id":"3034","type":"SaveTool"},{"attributes":{},"id":"3080","type":"Selection"},{"attributes":{"source":{"id":"3049","type":"ColumnDataSource"}},"id":"3055","type":"CDSView"},{"attributes":{"callback":null},"id":"3012","type":"DataRange1d"},{"attributes":{"data_source":{"id":"3049","type":"ColumnDataSource"},"glyph":{"id":"3051","type":"Circle"},"hover_glyph":{"id":"3053","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"3052","type":"Circle"},"selection_glyph":null,"view":{"id":"3055","type":"CDSView"}},"id":"3054","type":"GlyphRenderer"},{"attributes":{"months":[0,6]},"id":"3075","type":"MonthsTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"3072","type":"MonthsTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":12},"x":{"field":"Date"},"y":{"field":"HD"}},"id":"3052","type":"Circle"},{"attributes":{},"id":"3031","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3037","type":"BoxAnnotation"},{"attributes":{},"id":"3079","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.25},"fill_color":{"value":"grey"},"line_color":{"value":null},"size":{"units":"screen","value":12},"x":{"field":"Date"},"y":{"field":"HD"}},"id":"3051","type":"Circle"},{"attributes":{},"id":"3030","type":"PanTool"}],"root_ids":["3011"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"e442b01a-5cd6-4fb9-894d-394452d2be44","roots":{"3011":"8d2de964-41f9-405f-9cac-1f4e14109a7d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();