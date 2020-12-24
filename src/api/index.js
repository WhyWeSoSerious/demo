import ajax from './ajax'
export default function reqCategoryList() {
    return ajax({
        url: '/product/getBaseCategoryList'
    })
}
    
   
