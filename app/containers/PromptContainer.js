import React from 'react'

export const PromptContainer = () => (
   <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>SOME hEADER HERE</h1>
      <div className="col-sm-12">
         <form>
            <div className="form-group">
               <input type="text"
                      className="form-control"
                      placeholder="Github username"/>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
               <button className="btn btn-block btn-success"
                        type="submit">
                  Continue
               </button>
            </div>
         </form>
      </div>
   </div>
)