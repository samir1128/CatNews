
//first md
///<div className="row">
          {!this.state.loading && this.state.article.map((e)=>{
            return     <div key={e.url} className="col-md-3">
              <NewsItem  imageUrl={e.urlToImage} title={e.title.slice(0, 50)} description={e.description.slice(0, 80)} newsUrl={e.url}/>
            </div>
            
            })}
        </div>
   

  ///before refractoring
  //
  async componentDidMount() {
 
  } 

//
 handlePrevClick = async () => {
    
    
 };


//
 handleNextClick = async () => {
    

  };

















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



 