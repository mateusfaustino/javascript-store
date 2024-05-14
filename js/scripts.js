async function getAllProducts(limit = null, sort='asc') {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  
    try {
        const params = `?limit=${limit}&sort=${sort}`
        const response = await fetch(`https://fakestoreapi.com/products${params}`, requestOptions);
        const result = await response.json();
        return(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function getASingleProduct(productId){
    try {
        const response = await fetch('https://fakestoreapi.com/products/'+productId)
        const result = await response.json()
        return(result)    
    } catch (error) {
        console.error(error)
    }
    
  }

  async function getAllCategories() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/categories`);
        const result = await response.json();
        return(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProductsByCategory(category='jewelery') {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const result = await response.json();
        return(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function addNewProduct(title,price,description,image,category) {
    const myHeaders = new Headers();
    
    const raw = JSON.stringify({
        "title": title,
        "price": price,
        "description": description,
        "image": image,
        "category": category
    });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
  
    try {
        const response = await fetch(`https://fakestoreapi.com/products`, requestOptions);
        const result = await response.json();
        return(result);
    } catch (error) {
      console.error(error);
    }
  }
  window.addEventListener('load',async ()=>{
      let produto = await addNewProduct("Iphone 13",500,"Esse Iphone é massa",'http://imagemdetest.png','electronics')
      console.log(produto)

  })