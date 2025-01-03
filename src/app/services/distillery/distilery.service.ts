import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@appEnv/environment';
import { apiUrls } from '@appEnv/apiurls';

@Injectable({
  providedIn: 'root'
})
export class DistileryService {

  dislryURL = environment.distilleryBaseURL;
  userManagementURL = environment.baseURLUser;
  masterURL = environment.baseURLMaster;
  parentunitURL = environment.parentunit;
  setPreview: any;

  workflowbaseURL ='http://30060c9f59ef.ngrok.io/workflow/'
  // masterswagerurl ='http://65.0.150.210:3503/masterData/'


  constructor(
    private http: HttpClient
  ) {
    // console.log('preview data", this.setPreview);
  }
   // tank reg
  getnewtankreg():Observable<any>{
    return this.http.get(this.masterURL + apiUrls.newtankreg)

  }
  gettankmetirelmoc():Observable<any>{
    return this.http.get(this.masterURL + apiUrls.gettankmetirecalMoc)

  }
   gettankusage(id):Observable<any>{
     return this.http.get(this.masterURL + apiUrls.tankusage + id)
   }
   gettankrawmetirel(id):Observable<any>{
    return this.http.get(this.masterURL + apiUrls.tankrawmetireal + id)
   }
  // export order api's
  getExportorder(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.exportgetAllIndentImport);
  }

  getExportDownload(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.exceldownload, { responseType: 'blob' });
  }

  getExportorderbyid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.exportorderbyid + id);
  }

  addExportorder(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.exportaddorder, data);
  }

  UpdateExportorder(data): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.exportupdateexportorder, data);
  }

  searchExportOrder(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.exportLazySearch, data);
  }

  //Allotment Api's
  getAllotment(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.allotmentrequestList);
  }

  getAllotmentById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.allotmentrequestGetById + id);
  }

  addAllotment(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.allotmentrequestCreate, postdata);
  }

  updateAllotment(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.updateallotmentrequest, postdata);
  }

  approvalAllotment(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.approvelallotmentreq, postdata);
  }

  searchAllotment(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.LazySearch, postdata);
  }

  getAllotmentDownload(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.allotmentexportExcel, { responseType: 'blob' });
  }

  getentitype(): Observable<any> {
    return this.http.get(this.userManagementURL + apiUrls.getallentitytypes);
  }

  // dispatch-pd22 api's
  getPd22(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.pd22registrationGetAll);
  }

  getPd22ById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.pd22registrationGetbyId + id);
  }

  addPd22(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.pd22registrationAdd, postdata);
  }

  updatePd22(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.pd22registrationUpdate, postdata);
  }

  searchPd22(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.pd22lazySearch, postdata);
  }

  // dispatch-pd24 api's
  getPd24(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.pd24IssuanceGetAll);
  }

  getPd24ById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.pd24IssuanceGetbyId + id);
  }

  addPd24(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.pd24IssuanceAdd, postdata);
  }

  updatePd24(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.pd24IssuanceUpdate, postdata);
  }

  searchPd24(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.pd24lazySearch, postdata);
  }

  //dispatch-pd25 api's
  getPd25(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.PD25getAll);
  }

  getPd25ById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.PD25GetbyId + id);
  }

  addPd25(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.PD25Add, postdata);
  }

  updatePd25(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.PD25Update, postdata);
  }

  searchPd25(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.PD25lazySearch, postdata);
  }

  // dispatch-pd26 api's
  getPd26(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.PD26getAll);
  }

  getPd26ById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.PD26GetbyId + id);
  }

  addPd26(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.PD26Add, postdata);
  }

  updatePd26(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.PD26Update, postdata);
  }

  searchPd26(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.PD26lazySearch, postdata);
  }

  // exportpermit api's
  getExportorderprimit(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.exportpermitlist);
  }

  downloadExportPrmt(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.excelpermtdownload, { responseType: 'blob' });
  }

  getExportorderprmtbyid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.exportpermitview + id);
  }

  addexportprmt(data) {
    return this.http.post(this.dislryURL + apiUrls.exportaddpermit, data);
  }

  updateexportprmt(data) {
    return this.http.put(this.dislryURL + apiUrls.exportpermitedit, data);
  }

  searchExportPrmt(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.exportsearchapi, data);
  }

  // fermentation api's
  getotnumber(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getotnumber);
  }

  getotmumberdetails(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.otdetails + id);
  }

  createfermentation(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.fermentationcreate, data);
  }

  updatefermentation(data): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.fermentationcreate, data);
  }

  getlist(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.getlist, data);
  }

  getviewdetails(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getview + id);
  }

  getprefermetor(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getfermetornumber + id);
  }

  getfermetordetails(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.otfermenterdetails + id);
  }

  fermenterdetails(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.fermentationvessels + id);
  }

  getvessaldata(data): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.vesselcapacity + data);
  }

  getotmumberdetailss(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.otdetails + id);
  }

  getvessalnodata(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getvessaldata + id)
  }

  // importpermtrequest api's
  getallimportpermitreq(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getAllImportPermit);
  }

  getdownloadexcel(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.imppermitexceldownload);
  }

  getimportprtbyid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getByIdImportPermit + id);
  }

  addimportprtreq(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.AddImportPermit, data);
  }

  updateimportprmtreq(data): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.UpdateImportPermit, data);
  }

  searchimportprmtreq(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.importpermitlazySearch, data);
  }

  // importrequest api's
  getImportreq(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getAllIndentImport);
  }

  getexceldownload(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.importexceldownload);
  }

  searchImportreq(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.Importsearch, data);
  }

  getImportreqbyid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getIndentImportById + id);
  }

  addImportreq(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.addIndentImport, data)
  }

  updateImportreq(data): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.updateIndentImport, data);
  }

  // indentrequest api's
  getindentrequest(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getAllIndent);
  }

  downloadIndentRequests(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.indentexceldownload, { responseType: 'blob' });
  }

  getindentbyid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getIndentById + id);
  }

  addindentreq(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.addIndent, data);
  }

  updatereq(data): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.updateIndent, data);
  }

  approvalindent(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.approveIndent, data);
  }

  searchindent(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.indentlazysearch, postdata);
  }

  getautopopulate(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getautopopulate);
  }

  getautoresrveddata(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getreserddetails + id);
  }

  getallotmentdata(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getallotmentids);
  }

  gettankexistingcapacitydata(data): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getTankExistingCapacity + data);
  }

  // mf4acknowledgemt api's
  getgatedata(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getgatepass + id);
  }

  getMF4Acklist(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getmf4acklist);
  }

  update(id): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.updateMf4ack + '?id=' + id, id);
  }

  // mf4recived api's
  getmf4alldata(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf4getall);
  }

  exceldownload(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf4exceldownload, { responseType: 'blob' });
  }

  getmf4byid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf4getbyid + id);
  }

  addmf4data(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.distilleryinwardmollasees, data);
  }

  updatemf4recived(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.distilleryinwardmollasees, data);
  }

  searchapi(data): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf4lazysearch, data);
  }

  getautodata(data): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf4autodata + data);
  }

  // mf6partone api's
  getMF6Partone(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf6part1List);
  }

  getMF6PartoneById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf6part1GetById + id);
  }

  addMF6Partone(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf6part1Create, postdata);
  }

  updateMF6Partone(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf6part1Update, postdata);
  }

  searchMF6Partone(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf6part1LazySearch, postdata);
  }

  getautopopulatedata(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf6part1gatpassdetail + id);
  }

  getcurrentStockBytankid(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.currentstockbytank + id);
  }

  getopenBalance(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.currentStock);
  }

  getdesignationbyofficer() {
    return this.http.get(this.userManagementURL + apiUrls.userdesignation);
  }

  // mf6parttwo api's
  getMf6parttwo(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf6part2List);
  }

  getMf6parttwoById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.mf6part2GetById + id);
  }

  addMf6parttwo(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf6part2Create, postdata);
  }

  updateMf6parttwo(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.mf6part2Update, postdata);
  }

  searchMf6parttwo(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf6part2LazySearch, postdata);
  }

  // mf10-entry api's
  getMf10entrys(): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getAllmf10MolassesEntry);
  }

  getMf10entrysById(id): Observable<any> {
    return this.http.get(this.dislryURL + apiUrls.getmf10MolassesEntryById + id);
  }

  addMf10entrys(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf10add, postdata);
  }

  updateMf10entrys(postdata): Observable<any> {
    return this.http.put(this.dislryURL + apiUrls.mf10update, postdata);
  }

  searchMf10entrys(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.mf10LazySearch, postdata);
  }

  //mf12-register api's
  getMf12register(): Observable<any> {
    const url = this.dislryURL + apiUrls.mf12registerList;
    return this.http.get(url);
  }

  getMf12registerById(id): Observable<any> {
    const url = this.dislryURL + apiUrls.mf12registerGetById + id;
    return this.http.get(url);
  }

  addMf12register(postdata): Observable<any> {
    const url = this.dislryURL + apiUrls.mf12registerCreate;
    return this.http.post(url, postdata);
  }

  updateMf12register(postdata): Observable<any> {
    const url = this.dislryURL + apiUrls.mf12registerUpdate;
    return this.http.put(url, postdata);
  }

  searchMf12register(postdata): Observable<any> {
    const url = this.dislryURL + apiUrls.mf12azySearch;
    return this.http.post(url, postdata);
  }

  //otproductionplan api's
  searchotProddata(data): Observable<any> {
    const url = this.dislryURL + apiUrls.otProdlazySearch;
    return this.http.post(url, data);
  }

  getotProdbyid(id): Observable<any> {
    const url = this.dislryURL + apiUrls.otProdgetById + id;
    return this.http.get(url);
  }

  addotProddata(data): Observable<any> {
    const url = this.dislryURL + apiUrls.otProdcreate;
    return this.http.post(url, data);
  }

  updateotProddata(data): Observable<any> {
    const url = this.dislryURL + apiUrls.otProdupdate;
    return this.http.put(url, data);
  }

  getdistilleytank(): Observable<any> {
    const url = this.dislryURL + apiUrls.disttank;
    return this.http.get(url);
  }

  getusagetanks(): Observable<any> {
    const url = this.dislryURL + apiUrls.vesseltanks;
    return this.http.get(url);
  }

  gettanksbyid(id) {
    const ids = `?gradeId=${id}`;
    const url = this.dislryURL + `${apiUrls.gettanksbyid}${ids}`;
    return this.http.get(url);
  }


  // receiver methods :: ss

  getrecerot(){
    const url = this.dislryURL + apiUrls.receivergetotnumber;
    return this.http.get(url)
  }

  getrecvreferenceno(data){
    const url = this.dislryURL + apiUrls.recvgetrefno +data;
    return this.http.get(url);
  }
  getrecivertank(data){
    const url = this.dislryURL + apiUrls.recvtank +data;
    return this.http.get(url);
  }

  recvcreate(data){
    const url = this.dislryURL + apiUrls.recvcreate;
    return this.http.post(url,data);
  }
  recvupdate(data){
    const url = this.dislryURL + apiUrls.recvupdate;
    return this.http.put(url,data);
  }
  getrevautopopulate(id){
    const url = this.dislryURL + apiUrls.getrecvrautopopulate + id;
    return this.http.get(url);
  }

  getsprint(){
    const url = this.masterURL + apiUrls.getsprint;
    return this.http.get(url);
  }


  /// sent to still//

  createSentToStill(data):Observable<any>{

    const url = this.dislryURL + apiUrls.createsenttostill;
    return this.http.post(url, data);

  }
  updateSentToStill(data):Observable<any>{

    const url = this.dislryURL + apiUrls.updatesenttostill;
    return this.http.put(url, data);

  }
  getSentToStill(data):Observable<any>{
    
    const url = this.dislryURL + apiUrls.senttostilllazySearch;
    return this.http.post(url, data);

  }

  getsenttostillbyid(id): Observable<any> {
    const url = this.dislryURL + apiUrls.getsenttostillbyId + id;
    return this.http.get(url);
  }
  getsenttostillOtnumber(){
    const url = this.dislryURL + apiUrls.senttostillgetotnumber;
    return this.http.get(url)
  }

  getsenttostillfermentrenceno(data){
    const url = this.dislryURL + apiUrls.senttostillfermentrefno +data;
    return this.http.get(url);
  }





  /////
  searchrecver(data){
    const url = this.dislryURL + apiUrls.searchrecever;
    return this.http.post(url,data);
  }

  getrecverviewdata(id){
    const url = this.dislryURL + apiUrls.getviewdata + id;
    return this.http.get(url);
  }

  getconsumptiontype(){
    const url = this.dislryURL + apiUrls.consumptiontype;
    return this.http.get(url);
  }

  getworkflowbydesignation(data,data2) {
    const ids = `?moduleNameCode=${data}&workFlowName=${data2}`;
    const url = this.workflowbaseURL + `${apiUrls.getworkflowbydesignation}${ids}`;
    return this.http.get(url);
  }


  // tanks transfer api's ::::

  tanktranscreate(data){
    const url = this.dislryURL + apiUrls.tanktransfercreate;
    return this.http.post(url,data);
  }

  tankgetall(data){
    const url = this.dislryURL + apiUrls.tankgetalldata;
    return this.http.post(url,data);
  }

  getbyiddata(id){
    const url = this.dislryURL + apiUrls.tankgetbyiddata + id;
    return this.http.post(url,id);
  }

  getByRawMaterialId(id){
    const url = this.dislryURL + apiUrls.getbyrawmetiraldata + id;
    return this.http.get(url);
  }

  searchTankTransfer(postdata): Observable<any> {
    return this.http.post(this.dislryURL + apiUrls.searchTankTransfer, postdata);
  }

  updateTanTransfer(postdata): Observable<any> {
    const url = this.dislryURL + apiUrls.tanktransfercreate;
    return this.http.post(url, postdata);
  }

  getAllTanReg(): Observable<any> {
    const url = this.dislryURL + apiUrls.getdistAllTankReg;
    return this.http.get(url);
  }
  getallfromtanks():Observable<any>{
    const url = this.dislryURL + apiUrls.getfromtanks;
    return this.http.get(url);
  }
  getAllTankRegis(): Observable<any> {
    const url = this.dislryURL + apiUrls.getAllTankRegistration;
    return this.http.get(url);
  }
  getAllTankbasedOnTankRawmaterial(id): Observable<any> {
    const url = this.dislryURL + apiUrls.getTankListByRawMaterialId +id;
    return this.http.get(url);
  }

  getAllTankRawMaterialbasedOnTankuasagetype(id): Observable<any> {
    const url = this.masterURL + apiUrls.getRawMaterialByTankUsageGroupId +id;
    return this.http.get(url);
  }

  getapplicationnumbers(data): Observable<any> {
    const url = this.dislryURL + apiUrls.gettankregapplicationnum +data;
    return this.http.post(url,data);
  }

  getmetirealmoc():Observable<any>{
    const url = this.masterURL + apiUrls.gettankmetirecalMoc;
    return this.http.get(url);
  }

  
  getTankUsageall():Observable<any>{
    const url = this.masterURL + apiUrls.tankusagegeAll;
    return this.http.get(url);
  }

  getproducationlist(){
    const url = this.masterURL + apiUrls.producationplan;
    return this.http.get(url);
  }

  ////dipbook apis ///////

  addDipbook(postParam): Observable<any> {
    const url = this.dislryURL + apiUrls.createUpdateDipBook;
    return this.http.post(url, postParam);
  }

  searchDipbook(postParam): Observable<any> {
    const url = this.dislryURL + apiUrls.searchDipBook;
    return this.http.post(url, postParam);
  }

  getDipBookById(id): Observable<any> {
    const url = this.dislryURL + apiUrls.findDipBookById + id;
    return this.http.get(url);
  }

  getOpeningBalance(id): Observable<any> {
    const url = this.dislryURL + apiUrls.getOpeningBalance + id;
    return this.http.get(url);
  }

  searchTankInsp(postParam): Observable<any> {
    const url = this.dislryURL + apiUrls.searchTankInspec;
    return this.http.post(url, postParam);
  }


  // Indent for Blend apis //
  
  addIndent(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.createIndent;
    return this.http.post(url, postParam);
  }

  getAppNumber(data): Observable<any> {
    const url = this.parentunitURL + apiUrls.getAppNumber + data;
    return this.http.post(url,data);
  }

  getTempLicense(): Observable<any> {
    const url = this.parentunitURL + apiUrls.getTempLicense;
    return this.http.get(url);
  }

  getBollingPlan(data,data2) {
    const ids = `?licenseNumber=${data}&bottlingPlanNumber=${data2}`;
    const url = this.parentunitURL + `${apiUrls.getBottlingPlan}${ids}`;
    return this.http.get(url);
  }

  searchIndentBlend(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.searchIndentBlend;
    return this.http.post(url, postParam);
  }

  getIndentBlendById(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findIndentById + id;
    return this.http.get(url);
  }
  // Create BPP //

  addBpp(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.createUpdateBottlingProductionPlan;
    return this.http.post(url, postParam);
  }

  searchBPP(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.searchBottlingProductionPlan;
    return this.http.post(url, postParam);
  }

  getPBBById(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findBottlingProductionPlan + id;
    return this.http.get(url);
  }

  getBrandDetails(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findBrandDetails + id;
    return this.http.get(url);
  }

  getallmeasurement(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findPackageSizeByBrandDetailId + id;
    return this.http.get(url);
  }

  allPackageTypes(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findPackageTypeByBrandDetailId + id;
    return this.http.get(url);
  }

  findBrandDropdowns(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.findBrandDropdown;
    return this.http.post(url, postParam);
  }

  findBrand(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.postBrandDetails;
    return this.http.post(url, postParam);
  }

  findLabelDetails(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.findLabelDetails;
    return this.http.post(url, postParam);
  }

  getTankDetailsbyApplicatioin(id): Observable<any> {
    const url = this.dislryURL + apiUrls.findtankDetails + id;
    return this.http.post(url,{});
  }

  searchQrCOde(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.searchQrCOde;
    return this.http.post(url, postParam);
  }
  getQrById(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findQrCode + id;
    return this.http.get(url);
  }
  addQR(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.addQr;
    return this.http.post(url, postParam);
  }

  getLiquorType() {
    const url = this.masterURL + apiUrls.getAllLiquorType;
    return this.http.get(url).toPromise();
}
addprintStatus(postParam,id): Observable<any> {
  const url = this.parentunitURL + apiUrls.addprintStatus +id;
  return this.http.post(url, postParam);
}

  // Boxing Process apis
  searchBoxing(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.searchBoxinglist;
    return this.http.post(url, postParam);
  }

  getboxingProcessId(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.getBoxingProcess + id;
    return this.http.get(url);
  }

  updateWastage(data,data2): Observable<any> {
    const ids = `?wastageQuantity=${data}&bottlingPlanId=${data2}`;
    const url = this.parentunitURL + `${apiUrls.updateWastage}${ids}`;
    return this.http.post(url, data, data2);
  }

  transferWarehouse(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.transferWarehouse;
    return this.http.post(url, postParam);
  }

  // Mannual Scanning apis
  searchManualScan(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.searchManualScan;
    return this.http.post(url, postParam);
  }

  getManualScanById(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findPrintedDetails + id;
    return this.http.get(url);
  }

  scanBarcodeQr(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.addScanQrcodeBarcode;
    return this.http.post(url, postParam);
  }


  scanStatus(postParam,data): Observable<any> {
    const url = this.parentunitURL + apiUrls.scanQrcodeBarcodeMapping + data;
    return this.http.post(url,postParam);
  }

  //////Bottling Process ///
  
  getbotllingPlanId(): Observable<any> {
    const url = this.parentunitURL + apiUrls.findProductionPlan;
    return this.http.get(url);
  }

  addBottlingProcess(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.addBottlingProcess;
    return this.http.post(url, postParam);
  }

  searchBottlingProcess(postParam): Observable<any> {
    const url = this.parentunitURL + apiUrls.searchBottlingProcess;
    return this.http.post(url, postParam);
  }

  getBottlingProcess(id): Observable<any> {
    const url = this.parentunitURL + apiUrls.findBottlingProcess + id;
    return this.http.get(url);
  }

  // stockinhand ///

  getstockinlistdata(postParam){
    const url = this.parentunitURL + apiUrls.getstockinhandlist;
    return this.http.post(url, postParam);
  }

}
