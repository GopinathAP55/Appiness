import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService) { }

  productList:string[] = [];

  


  product:any;
  categoryValue:any;
  addProduct(){
    this.productList.push("Enter Product Name")
  }

 deleteProduct(deleteProduct:any){
  let indexValue = this.productList.indexOf(deleteProduct);
  if(indexValue !== -1){
    this.productList.splice(indexValue,1);
  }
  this.categoryValue="";
  this.productService.deleteProduct(deleteProduct).subscribe(
    res=>{
      console.log("deleted")
    },
    err=>{
      console.log(err)
    }
  )
}



addName(nameOfTheProduct:any){
  if(nameOfTheProduct !=null && nameOfTheProduct !== "Enter Product Name"){
    this.productList.push(nameOfTheProduct);
    this.productService.insertProduct(nameOfTheProduct).subscribe(
      res=>{
        console.log('Sucess')
      },
      err=>{
        console.log(err)
      }
    )
  }
 

}

openCategory(productName:any){
  this.categoryValue=true;
}

  ngOnInit() {
  }

}
