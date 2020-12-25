import ajax from './ajax'
export  function reqCategoryList() {
    return ajax({
        url: '/product/getBaseCategoryList'
    })
}
export const reqBannerList = () => ajax('/cms/banner')

