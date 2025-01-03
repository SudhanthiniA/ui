import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
    providedIn: 'root'
})
export class InventoryMasterService {

    baseURL = environment.baseURLMaster;

    constructor(
        private http: HttpClient
    ) { }

    // Category Api's
    getCategory(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllCategory;
        return this.http.get(url);
    }

    searchCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchCategory;
        return this.http.post(url, postParam);
    }

    addCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addCategory;
        return this.http.post(url, postParam);
    }

    getCategoryById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getCategoryById + id;
        return this.http.get(url);
    }

    putCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateCategory;
        return this.http.put(url, postParam);
    }

    // Sub Category Api's
    getSubCategory(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllSubCategory;
        return this.http.get(url);
    }

    searchSubCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchSubCategory;
        return this.http.post(url, postParam);
    }

    addSubCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addSubCategory;
        return this.http.post(url, postParam);
    }

    getSubCategoryById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getSubCategoryById + id;
        return this.http.get(url);
    }

    putSubCategory(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateSubCategory;
        return this.http.put(url, postParam);
    }

    // GST Api's
    getGst(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllGst;
        return this.http.get(url);
    }

    searchGst(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchGst;
        return this.http.post(url, postParam);
    }

    addGst(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addGst;
        return this.http.post(url, postParam);
    }

    getGstById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getGstById + id;
        return this.http.get(url);
    }

    putGst(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateGst;
        return this.http.put(url, postParam);
    }

    // Items Api's
    getAllItems(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllItems;
        return this.http.get(url);
    }

    searchitem(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchItem;
        return this.http.post(url, postParam);
    }

    addItem(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addItem;
        return this.http.post(url, postParam);
    }

    getItemById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getItemById + '?id=' + id;
        return this.http.get(url);
    }

    updateItem(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateItem;
        return this.http.put(url, postParam);
    }

    // UOM Api's
    getuom(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllUom;
        return this.http.get(url);
    }

    searchUom(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchUom;
        return this.http.post(url, postParam);
    }

    addUom(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addUom;
        return this.http.post(url, postParam);
    }

    getUomById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getUOmById + id;
        return this.http.get(url);
    }

    putUom(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateUom;
        return this.http.put(url, postParam);
    }

    // Store Master Api's
    getAllStores(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllStores;
        return this.http.get(url);
    }
    addStore(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addStore;
        return this.http.post(url, postParam);
    }

    getstoreById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getStoreByid + '?id=' + id;
        return this.http.get(url);
    }

    updateStore(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateStore;
        return this.http.put(url, postParam);
    }
    searchStore(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchStore;
        return this.http.post(url, postParam);
    }
    // Product Api's
    getProduct(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllProduct;
        return this.http.get(url);
    }

    searchProduct(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchProduct;
        return this.http.post(url, postParam);
    }

    addProduct(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addProduct;
        return this.http.post(url, postParam);
    }

    getProductById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getProductById + id;
        return this.http.get(url);
    }

    putProduct(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateProduct;
        return this.http.put(url, postParam);
    }

    // Sub Product Api's
    getSubProduct(): Observable<any> {
        const url = this.baseURL + apiUrls.getAllSubProduct;
        return this.http.get(url);
    }

    searchSubProduct(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.searchSubProduct;
        return this.http.post(url, postParam);
    }

    addSubProduct(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.addSubProduct;
        return this.http.post(url, postParam);
    }

    getSubProductById(id): Observable<any> {
        const url = this.baseURL + apiUrls.getSubProductById + id;
        return this.http.get(url);
    }

    putSubProduct(postParam): Observable<any> {
        const url = this.baseURL + apiUrls.updateSubProduct;
        return this.http.put(url, postParam);
    }

}
