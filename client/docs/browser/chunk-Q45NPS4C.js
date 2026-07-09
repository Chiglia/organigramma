import{$ as A,$a as $,Ab as ht,Ba as k,Bb as $e,Ca as P,Cb as Re,D as At,Dc as Qe,E as Kt,Ea as Pe,Ec as Ze,F as xt,Fa as ne,Fc as Ht,Ga as Nt,Gc as L,H as J,Ha as b,I as Fe,Ia as lt,Ja as dt,Jb as Le,Jc as ue,K as U,L as Z,Lc as ce,M as Ft,Mc as ct,N as m,Nc as gt,O as X,Oc as F,P as Tt,Pc as Xe,Qa as S,R as f,T as rt,Ta as ie,U as M,Ub as le,W as O,X as w,Xb as je,Y as I,Yb as He,Z as tt,_ as y,_a as ut,_b as de,a as d,aa as Te,b as B,ba as z,bb as x,c as Ve,db as Bt,e as Me,eb as E,ec as Ue,fb as Ne,h as Ie,hb as oe,j as Ae,ja as p,jc as ze,ka as W,kb as Ot,l as xe,la as q,lb as Be,lc as Ge,ma as vt,mb as $t,mc as Ct,na as Jt,nb as R,oa as te,ob as _t,oc as Rt,pa as ee,pb as re,qa as st,ra as at,rc as Lt,sa as et,sc as jt,tc as ft,u as Yt,ua as ke,uc as We,v as T,va as kt,vc as qe,w as C,wa as v,wb as se,x as D,xa as nt,ya as Q,yb as ae,z as c,za as Pt,zb as Oe}from"./chunk-P6AOF4NG.js";var rn=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(M(rt),M(X))};static \u0275dir=I({type:e})}return e})(),Wn=(()=>{class e extends rn{static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275dir=I({type:e,features:[y]})}return e})(),sn=new D("");var qn={provide:sn,useExisting:Yt(()=>an),multi:!0};function Qn(){let e=oe()?oe().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Zn=new D(""),an=(()=>{class e extends rn{_compositionMode;_composing=!1;constructor(t,n,i){super(t,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Qn())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(M(rt),M(X),M(Zn,8))};static \u0275dir=I({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&kt("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[S([qn]),y]})}return e})();var Xn=new D(""),Yn=new D("");function ln(e){return e!=null}function dn(e){return Te(e)?Ie(e):e}function un(e){let o={};return e.forEach(t=>{o=t!=null?d(d({},o),t):o}),Object.keys(o).length===0?null:o}function cn(e,o){return o.map(t=>t(e))}function Kn(e){return!e.validate}function pn(e){return e.map(o=>Kn(o)?o:t=>o.validate(t))}function Jn(e){if(!e)return null;let o=e.filter(ln);return o.length==0?null:function(t){return un(cn(t,o))}}function hn(e){return e!=null?Jn(pn(e)):null}function ti(e){if(!e)return null;let o=e.filter(ln);return o.length==0?null:function(t){let n=cn(t,o).map(dn);return xe(n).pipe(Ae(un))}}function fn(e){return e!=null?ti(pn(e)):null}function Ye(e,o){return e===null?[o]:Array.isArray(e)?[...e,o]:[e,o]}function ei(e){return e._rawValidators}function ni(e){return e._rawAsyncValidators}function pe(e){return e?Array.isArray(e)?e:[e]:[]}function zt(e,o){return Array.isArray(e)?e.includes(o):e===o}function Ke(e,o){let t=pe(o);return pe(e).forEach(i=>{zt(t,i)||t.push(i)}),t}function Je(e,o){return pe(o).filter(t=>!zt(e,t))}var Gt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=hn(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=fn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},he=class extends Gt{name;get formDirective(){return null}get path(){return null}},Vt=class extends Gt{_parent=null;name=null;valueAccessor=null},fe=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var zo=(()=>{class e extends fe{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(M(Vt,2))};static \u0275dir=I({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&ne("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[y]})}return e})();var Dt="VALID",Ut="INVALID",mt="PENDING",wt="DISABLED",pt=class{},Wt=class extends pt{value;source;constructor(o,t){super(),this.value=o,this.source=t}},St=class extends pt{pristine;source;constructor(o,t){super(),this.pristine=o,this.source=t}},Et=class extends pt{touched;source;constructor(o,t){super(),this.touched=o,this.source=t}},bt=class extends pt{status;source;constructor(o,t){super(),this.status=o,this.source=t}};var ge=class extends pt{source;constructor(o){super(),this.source=o}};function ii(e){return(qt(e)?e.validators:e)||null}function oi(e){return Array.isArray(e)?hn(e):e||null}function ri(e,o){return(qt(o)?o.asyncValidators:e)||null}function si(e){return Array.isArray(e)?fn(e):e||null}function qt(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var me=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,t){this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return ut(this.statusReactive)}set status(o){ut(()=>this.statusReactive.set(o))}_status=$(()=>this.statusReactive());statusReactive=U(void 0);get valid(){return this.status===Dt}get invalid(){return this.status===Ut}get pending(){return this.status===mt}get disabled(){return this.status===wt}get enabled(){return this.status!==wt}errors;get pristine(){return ut(this.pristineReactive)}set pristine(o){ut(()=>this.pristineReactive.set(o))}_pristine=$(()=>this.pristineReactive());pristineReactive=U(!0);get dirty(){return!this.pristine}get touched(){return ut(this.touchedReactive)}set touched(o){ut(()=>this.touchedReactive.set(o))}_touched=$(()=>this.touchedReactive());touchedReactive=U(!1);get untouched(){return!this.touched}_events=new Me;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Ke(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Ke(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Je(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Je(o,this._rawAsyncValidators))}hasValidator(o){return zt(this._rawValidators,o)}hasAsyncValidator(o){return zt(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(B(d({},o),{sourceControl:n})),t&&o.emitEvent!==!1&&this._events.next(new Et(!0,n))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),o.onlySelf||this._parent?._updateTouched(o,n),t&&o.emitEvent!==!1&&this._events.next(new Et(!1,n))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(B(d({},o),{sourceControl:n})),t&&o.emitEvent!==!1&&this._events.next(new St(!1,n))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,n),t&&o.emitEvent!==!1&&this._events.next(new St(!0,n))}markAsPending(o={}){this.status=mt;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new bt(this.status,t)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(B(d({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=wt,this.errors=null,this._forEachChild(i=>{i.disable(B(d({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Wt(this.value,n)),this._events.next(new bt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(B(d({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=Dt,this._forEachChild(n=>{n.enable(B(d({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(B(d({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,t){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Dt||this.status===mt)&&this._runAsyncValidator(n,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Wt(this.value,t)),this._events.next(new bt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(B(d({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?wt:Dt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=mt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:o!==!1};let n=dn(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,i)=>n&&n._find(i),this)}getError(o,t){let n=t?this.get(t):this;return n?.errors?n.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new bt(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,n)}_initObservables(){this.valueChanges=new J,this.statusChanges=new J}_calculateStatus(){return this._allControlsDisabled()?wt:this.errors?Ut:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(mt)?mt:this._anyControlsHaveStatus(Ut)?Ut:Dt}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,o.onlySelf||this._parent?._updatePristine(o,t),i&&this._events.next(new St(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new Et(this.touched,t)),o.onlySelf||this._parent?._updateTouched(o,t)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){qt(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=oi(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=si(this._rawAsyncValidators)}};var be=new D("",{factory:()=>Qt}),Qt="always";function ai(e,o){return[...o.path,e]}function li(e,o,t=Qt){ui(e,o),o.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(e.disabled),ci(e,o),hi(e,o),pi(e,o),di(e,o)}function tn(e,o){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function di(e,o){if(o.valueAccessor.setDisabledState){let t=n=>{o.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),o._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function ui(e,o){let t=ei(e);o.validator!==null?e.setValidators(Ye(t,o.validator)):typeof t=="function"&&e.setValidators([t]);let n=ni(e);o.asyncValidator!==null?e.setAsyncValidators(Ye(n,o.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let i=()=>e.updateValueAndValidity();tn(o._rawValidators,i),tn(o._rawAsyncValidators,i)}function ci(e,o){o.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&gn(e,o)})}function pi(e,o){o.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&gn(e,o),e.updateOn!=="submit"&&e.markAsTouched()})}function gn(e,o){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function hi(e,o){let t=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};e.registerOnChange(t),o._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function fi(e,o){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function gi(e){return Object.getPrototypeOf(e.constructor)===Wn}function mi(e,o){if(!o)return null;Array.isArray(o);let t,n,i;return o.forEach(r=>{r.constructor===an?t=r:gi(r)?n=r:i=r}),i||n||t||null}function en(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function nn(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var bi=class extends me{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,t,n){super(ii(t),ri(n,t)),this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),qt(t)&&(t.nonNullable||t.initialValueIsDefault)&&(nn(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new ge(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){en(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){en(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){nn(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var yi={provide:Vt,useExisting:Yt(()=>vi)},on=Promise.resolve(),vi=(()=>{class e extends Vt{_changeDetectorRef;callSetDisabledState;control=new bi;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new J;constructor(t,n,i,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=mi(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),fi(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){li(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){on.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,i=n!==0&&E(n);on.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ai(t,this._parent):[t]}static \u0275fac=function(n){return new(n||e)(M(he,9),M(Xn,10),M(Yn,10),M(sn,10),M(Bt,8),M(be,8))};static \u0275dir=I({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[S([yi]),y,Ft]})}return e})();var _i=new D("");var mn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({})}return e})();var ye=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:be,useValue:t.callSetDisabledState??Qt}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[mn]})}return e})(),ve=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:_i,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:be,useValue:t.callSetDisabledState??Qt}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[mn]})}return e})();function it(...e){if(e){let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[it(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}var Ci=Object.defineProperty,bn=Object.getOwnPropertySymbols,Di=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable,yn=(e,o,t)=>o in e?Ci(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,vn=(e,o)=>{for(var t in o||(o={}))Di.call(o,t)&&yn(e,t,o[t]);if(bn)for(var t of bn(o))wi.call(o,t)&&yn(e,t,o[t]);return e};function _n(...e){if(e){let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[_n(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Si(e){return typeof e=="function"&&"call"in e&&"apply"in e}function Ei({skipUndefined:e=!1},...o){return o?.reduce((t,n={})=>{for(let i in n){let r=n[i];if(!(e&&r===void 0))if(i==="style")t.style=vn(vn({},t.style),n.style);else if(i==="class"||i==="className")t[i]=_n(t[i],n[i]);else if(Si(r)){let s=t[i];t[i]=s?(...a)=>{s(...a),r(...a)}:r}else t[i]=r}return t},{})}function _e(...e){return Ei({skipUndefined:!1},...e)}var Zt={};function Mt(e="pui_id_"){return Object.hasOwn(Zt,e)||(Zt[e]=0),Zt[e]++,`${e}${Zt[e]}`}var Cn=(()=>{class e extends F{name="common";static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Y=new D("PARENT_INSTANCE"),N=(()=>{class e{document=c(xt);platformId=c(Tt);el=c(X);injector=c(Kt);cd=c(Bt);renderer=c(rt);config=c(Xe);$parentInstance=c(Y,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=c(Cn);baseStyle=c(F);scopedStyleEl;parent=this.$params.parent;cn=it;_themeScopedListener;themeChangeListenerMap=new Map;dt=x();unstyled=x();pt=x();ptOptions=x();$attrSelector=Mt("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=U(void 0);directiveUnstyled=U(void 0);$unstyled=$(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=$(()=>Lt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>Lt(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||Lt(t,this.$params))}get $style(){return d(d({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){Z(t=>{this.document&&!re(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{this._offThemeChangeListener("_themeScopedListener")})}),Z(t=>{this.document&&!re(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),t(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...n){return Ge(t)?t(...n):_e(...n)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,n="",i={}){return We(t,n,i)}_hook(t,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);i?.(...n),r?.(...n)}}_load(){gt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),gt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ct(t)&&this.baseStyle.load(t,d({name:"global"},this.$styleOptions))}_loadCoreStyles(){!gt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),gt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!ct.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,d({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,d({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,d({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(d({name:"global-style"},this.$styleOptions),r),ct.setLoadedStyleName("common")}if(!ct.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,d({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(d({name:`${this.$style?.name}-style`},this.$styleOptions),n),ct.setLoadedStyleName(this.$style?.name)}if(!ct.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,d({name:"layer-order",first:!0},this.$styleOptions)),ct.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:n}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,d({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t,n=()=>{}){this._offThemeChangeListener(t),gt.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(t,i),ue.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(t){this.themeChangeListenerMap.has(t)&&(ue.off("theme:change",this.themeChangeListenerMap.get(t)),this.themeChangeListenerMap.delete(t))}_getPTValue(t={},n="",i={},r=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},h=r?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,u=s?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,n,B(d({},i),{global:h||{}})),g=this._getPTDatasets(n);return a||!a&&u?l?this._mergeProps(l,h,u,g):d(d(d({},h),u),g):d(d({},u),g)}_getPTDatasets(t=""){let n="data-pc-",i=t==="root"&&Ct(this.$pt()?.["data-pc-section"]);return t!=="transition"&&B(d({},t==="root"&&B(d({[`${n}name`]:ft(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:ft(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:ft(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,n,i){let r=this._getOptionValue(t,n,i);return jt(r)||qe(r)?{class:r}:r}_getPT(t,n="",i){let r=(s,a=!1)=>{let l=i?i(s):s,h=ft(n),u=ft(this.$hostName||this.$name);return(a?h!==u?l?.[h]:void 0:l?.[h])??l};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)}_usePT(t,n,i,r){let s=a=>n?.call(this,a,i,r);if(t?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=t._usept||this.config?.ptOptions()||{},h=s(t.originalValue),u=s(t.value);return h===void 0&&u===void 0?void 0:jt(u)?u:jt(h)?h:a||!a&&u?l?this._mergeProps(l,h,u):d(d({},h),u):u}return s(t)}_useGlobalPT(t,n,i){return this._usePT(this.$globalPT,t,n,i)}_useDefaultPT(t,n,i){return this._usePT(this.$defaultPT,t,n,i)}ptm(t="",n={}){return this._getPTValue(this.$pt(),t,d(d({},this.$params),n))}ptms(t,n={}){return t.reduce((i,r)=>(i=_e(i,this.ptm(r,n))||{},i),{})}ptmo(t={},n="",i={}){return this._getPTValue(t,n,d({instance:this},i),!1)}cx(t,n={}){return this.$unstyled()?void 0:it(this._getOptionValue(this.$style.classes,t,d(d({},this.$params),n)))}sx(t="",n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,t,d(d({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,d(d({},this.$params),i));return d(d({},s),r)}}static \u0275fac=function(n){return new(n||e)};static \u0275dir=I({type:e,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[S([Cn,F]),Ft]})}return e})();var Ce=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=ot=>{if(ot)return getComputedStyle(ot).getPropertyValue("position")==="relative"?ot:r(ot.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),h=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),g=this.getViewport(),V=r(t)?.getBoundingClientRect()||{top:-1*h,left:-1*u},H,K,It="top";l.top+a+s.height>g.height?(H=l.top-V.top-s.height,It="bottom",l.top+H<0&&(H=-1*l.top)):(H=a+l.top-V.top,It="top");let Ee=l.left+s.width-g.width,Gn=l.left-V.left;if(s.width>g.width?K=(l.left-V.left)*-1:Ee>0?K=Gn-Ee:K=l.left-V.left,t.style.top=H+"px",t.style.left=K+"px",t.style.transformOrigin=It,i){let ot=Re(/-anchor-gutter$/)?.value;t.style.marginTop=It==="bottom"?`calc(${ot??"2px"} * -1)`:ot??""}}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,h=n.offsetWidth,u=n.getBoundingClientRect(),g=this.getWindowScrollTop(),j=this.getWindowScrollLeft(),V=this.getViewport(),H,K;u.top+l+s>V.height?(H=u.top+g-s,t.style.transformOrigin="bottom",H<0&&(H=g)):(H=l+u.top+g,t.style.transformOrigin="top"),u.left+a>V.width?K=Math.max(0,u.left+j+h-a):K=u.left+j,t.style.top=H+"px",t.style.left=K+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let h=l.split(",");for(let u of h){let g=this.findSingle(a,u);g&&s(g)&&n.push(g)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,g=t.scrollTop,j=t.clientHeight,V=this.getOuterHeight(n);u<0?t.scrollTop=g+u:u+V>j&&(t.scrollTop=g+u-j+V)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,h)=>{if(h!=null){let u=typeof h;if(u==="string"||u==="number")l.push(h);else if(u==="object"){let g=Array.isArray(h)?i(r,h):Object.entries(h).map(([j,V])=>r==="style"&&(V||V===0)?`${j.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${V}`:V?j:void 0);l=g.length?l.concat(g.filter(j=>!!j)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function ur(){Oe({variableName:ce("scrollbar.width").name})}function cr(){$e({variableName:ce("scrollbar.width").name})}var Dn=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=Ce.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var wn=(()=>{class e extends N{autofocus=!1;focused=!1;platformId=c(Tt);document=c(xt);host=c(X);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){_t(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ce.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275dir=I({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[y]})}return e})();var _=(()=>{class e{el;renderer;pBind=x(void 0);_attrs=U(void 0);attrs=$(()=>this._attrs()||this.pBind());styles=$(()=>this.attrs()?.style);classes=$(()=>it(this.attrs()?.class));listeners=[];constructor(t,n){this.el=t,this.renderer=n,Z(()=>{let a=this.attrs()||{},{style:i,class:r}=a,s=Ve(a,["style","class"]);for(let[l,h]of Object.entries(s))if(l.startsWith("on")&&typeof h=="function"){let u=l.slice(2).toLowerCase();if(!this.listeners.some(g=>g.eventName===u)){let g=this.renderer.listen(this.el.nativeElement,u,h);this.listeners.push({eventName:u,unlisten:g})}}else h==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,h.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=h))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){Rt(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(n){return new(n||e)(M(X),M(rt))};static \u0275dir=I({type:e,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(Nt(i.styles()),b(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return e})(),yt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({})}return e})();var Sn=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Vi=`
    ${Sn}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Mi={root:({instance:e})=>{let o=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,n=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,i=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":Ct(o)&&String(o).length===1,"p-badge-dot":ze(o),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},En=(()=>{class e extends F{name="badge";style=Vi;classes=Mi;static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var Vn=new D("BADGE_INSTANCE");var De=(()=>{class e extends N{componentName="Badge";$pcBadge=c(Vn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=x();badgeSize=x();size=x();severity=x();value=x();badgeDisabled=x(!1,{transform:E});_componentStyle=c(En);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275cmp=O({type:e,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(z("data-p",i.dataP),b(i.cn(i.cx("root"),i.styleClass())),Pe("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[S([En,{provide:Vn,useExisting:e},{provide:Y,useExisting:e}]),tt([_]),y],decls:1,vars:1,template:function(n,i){n&1&&lt(0),n&2&&dt(i.value())},dependencies:[R,L,yt],encapsulation:2,changeDetection:0})}return e})(),Mn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[De,L,L]})}return e})();var Ai=["*"],xi={root:"p-fluid"},In=(()=>{class e extends F{name="fluid";classes=xi;static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var An=new D("FLUID_INSTANCE"),xn=(()=>{class e extends N{componentName="Fluid";$pcFluid=c(An,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(In);static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275cmp=O({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&b(i.cx("root"))},features:[S([In,{provide:An,useExisting:e},{provide:Y,useExisting:e}]),tt([_]),y],ngContentSelectors:Ai,decls:1,vars:0,template:function(n,i){n&1&&(nt(),Q(0))},dependencies:[R],encapsulation:2,changeDetection:0})}return e})();var Fi=["*"],Ti=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Fn=(()=>{class e extends F{name="baseicon";css=Ti;static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Tn=(()=>{class e extends N{spin=!1;_componentStyle=c(Fn);getClassNames(){return it("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275cmp=O({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&b(i.getClassNames())},inputs:{spin:[2,"spin","spin",E]},features:[S([Fn]),y],ngContentSelectors:Fi,decls:1,vars:0,template:function(n,i){n&1&&(nt(),Q(0))},encapsulation:2,changeDetection:0})}return e})();var ki=["data-p-icon","spinner"],kn=(()=>{class e extends Tn{pathId;onInit(){this.pathId="url(#"+Mt()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275cmp=O({type:e,selectors:[["","data-p-icon","spinner"]],features:[y],attrs:ki,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(At(),Jt(0,"g"),ee(1,"path",0),te(),Jt(2,"defs")(3,"clipPath",1),ee(4,"rect",2),te()()),n&2&&(z("clip-path",i.pathId),f(3),ke("id",i.pathId))},encapsulation:2})}return e})();var Pn=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Pi=`
    ${Pn}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ni={root:"p-ink"},Nn=(()=>{class e extends F{name="ripple";style=Pi;classes=Ni;static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var Bn=(()=>{class e extends N{componentName="Ripple";zone=c(Fe);_componentStyle=c(Nn);animationListener;mouseDownListener;timeout;constructor(){super(),Z(()=>{_t(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&ht(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!le(n)&&!de(n)){let a=Math.max(Le(this.el.nativeElement),He(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=je(this.el.nativeElement),r=t.pageX-i.left+this.document.body.scrollTop-de(n)/2,s=t.pageY-i.top+this.document.body.scrollLeft-le(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&ae(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&ht(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&(!this.$unstyled()&&ht(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"))}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&ht(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"data-p-ink","true"),this.renderer.setAttribute(t,"data-p-ink-active","false"),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ue(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=I({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[S([Nn]),y]})}return e})();var On=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Oi=["content"],$i=["loadingicon"],Ri=["icon"],Li=["*"],Ln=(e,o)=>({class:e,pt:o});function ji(e,o){e&1&&et(0)}function Hi(e,o){if(e&1&&vt(0,"span",7),e&2){let t=v(3);b(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon))),p("pBind",t.ptm("loadingIcon")),z("aria-hidden",!0)}}function Ui(e,o){if(e&1&&(At(),vt(0,"svg",8)),e&2){let t=v(3);b(t.cn(t.cx("loadingIcon"),t.cx("spinnerIcon"))),p("pBind",t.ptm("loadingIcon"))("spin",!0),z("aria-hidden",!0)}}function zi(e,o){if(e&1&&(st(0),A(1,Hi,1,4,"span",3)(2,Ui,1,5,"svg",6),at()),e&2){let t=v(2);f(),p("ngIf",t.loadingIcon||(t.buttonProps==null?null:t.buttonProps.loadingIcon)),f(),p("ngIf",!(t.loadingIcon||t.buttonProps!=null&&t.buttonProps.loadingIcon))}}function Gi(e,o){}function Wi(e,o){if(e&1&&A(0,Gi,0,0,"ng-template",9),e&2){let t=v(2);p("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function qi(e,o){if(e&1&&(st(0),A(1,zi,3,2,"ng-container",2)(2,Wi,1,1,null,5),at()),e&2){let t=v();f(),p("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),f(),p("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",ie(3,Ln,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function Qi(e,o){if(e&1&&vt(0,"span",7),e&2){let t=v(2);b(t.cn(t.cx("icon"),t.icon||(t.buttonProps==null?null:t.buttonProps.icon))),p("pBind",t.ptm("icon")),z("data-p",t.dataIconP)}}function Zi(e,o){}function Xi(e,o){if(e&1&&A(0,Zi,0,0,"ng-template",9),e&2){let t=v(2);p("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Yi(e,o){if(e&1&&(st(0),A(1,Qi,1,4,"span",3)(2,Xi,1,1,null,5),at()),e&2){let t=v();f(),p("ngIf",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!t.iconTemplate&&!t._iconTemplate),f(),p("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",ie(3,Ln,t.cx("icon"),t.ptm("icon")))}}function Ki(e,o){if(e&1&&(W(0,"span",7),lt(1),q()),e&2){let t=v();b(t.cx("label")),p("pBind",t.ptm("label")),z("aria-hidden",(t.icon||(t.buttonProps==null?null:t.buttonProps.icon))&&!(t.label||t.buttonProps!=null&&t.buttonProps.label))("data-p",t.dataLabelP),f(),dt(t.label||(t.buttonProps==null?null:t.buttonProps.label))}}function Ji(e,o){if(e&1&&vt(0,"p-badge",10),e&2){let t=v();p("value",t.badge||(t.buttonProps==null?null:t.buttonProps.badge))("severity",t.badgeSeverity||(t.buttonProps==null?null:t.buttonProps.badgeSeverity))("pt",t.ptm("pcBadge"))("unstyled",t.unstyled())}}var to={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!e.label&&!e.buttonProps?.label&&!e.badge,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label,"p-button-icon-top":(e.iconPos==="top"||e.buttonProps?.iconPos==="top")&&e.label||e.buttonProps?.label,"p-button-icon-bottom":(e.iconPos==="bottom"||e.buttonProps?.iconPos==="bottom")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.cx("icon")).filter(([,o])=>!!o).reduce((o,[t])=>o+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},$n=(()=>{class e extends F{name="button";style=On;classes=to;static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var Rn=new D("BUTTON_INSTANCE");var eo=(()=>{class e extends N{componentName="Button";hostName="";$pcButton=c(Rn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});_componentStyle=c($n);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=x(void 0,{transform:E});onClick=new J;onFocus=new J;onBlur=new J;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=c(xn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275cmp=O({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&Pt(r,Oi,5)(r,$i,5)(r,Ri,5)(r,Ht,4),n&2){let s;k(s=P())&&(i.contentTemplate=s.first),k(s=P())&&(i.loadingIconTemplate=s.first),k(s=P())&&(i.iconTemplate=s.first),k(s=P())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",E],raised:[2,"raised","raised",E],rounded:[2,"rounded","rounded",E],text:[2,"text","text",E],plain:[2,"plain","plain",E],outlined:[2,"outlined","outlined",E],link:[2,"link","link",E],tabindex:[2,"tabindex","tabindex",Ne],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",E],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",E],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[S([$n,{provide:Rn,useExisting:e},{provide:Y,useExisting:e}]),tt([_]),y],ngContentSelectors:Li,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(nt(),W(0,"button",0),kt("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),Q(1),A(2,ji,1,0,"ng-container",1)(3,qi,3,6,"ng-container",2)(4,Yi,3,6,"ng-container",2)(5,Ki,2,6,"span",3)(6,Ji,1,4,"p-badge",4),q()),n&2&&(b(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),p("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),z("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),f(2),p("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),f(),p("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),f(),p("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),f(),p("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),f(),p("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[R,Ot,$t,Be,Bn,wn,kn,Mn,De,L,_],encapsulation:2,changeDetection:0})}return e})(),we=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[R,eo,L,L]})}return e})();var jn=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var no=["header"],io=["title"],oo=["subtitle"],ro=["content"],so=["footer"],ao=["*",[["p-header"]],[["p-footer"]]],lo=["*","p-header","p-footer"];function uo(e,o){e&1&&et(0)}function co(e,o){if(e&1&&(W(0,"div",1),Q(1,1),A(2,uo,1,0,"ng-container",2),q()),e&2){let t=v();b(t.cx("header")),p("pBind",t.ptm("header")),f(2),p("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function po(e,o){if(e&1&&(st(0),lt(1),at()),e&2){let t=v(2);f(),dt(t.header)}}function ho(e,o){e&1&&et(0)}function fo(e,o){if(e&1&&(W(0,"div",1),A(1,po,2,1,"ng-container",3)(2,ho,1,0,"ng-container",2),q()),e&2){let t=v();b(t.cx("title")),p("pBind",t.ptm("title")),f(),p("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),f(),p("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function go(e,o){if(e&1&&(st(0),lt(1),at()),e&2){let t=v(2);f(),dt(t.subheader)}}function mo(e,o){e&1&&et(0)}function bo(e,o){if(e&1&&(W(0,"div",1),A(1,go,2,1,"ng-container",3)(2,mo,1,0,"ng-container",2),q()),e&2){let t=v();b(t.cx("subtitle")),p("pBind",t.ptm("subtitle")),f(),p("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),f(),p("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function yo(e,o){e&1&&et(0)}function vo(e,o){e&1&&et(0)}function _o(e,o){if(e&1&&(W(0,"div",1),Q(1,2),A(2,vo,1,0,"ng-container",2),q()),e&2){let t=v();b(t.cx("footer")),p("pBind",t.ptm("footer")),f(2),p("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Co=`
    ${jn}

    .p-card {
        display: block;
    }
`,Do={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Hn=(()=>{class e extends F{name="card";style=Co;classes=Do;static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275prov=T({token:e,factory:e.\u0275fac})}return e})();var Un=new D("CARD_INSTANCE"),wo=(()=>{class e extends N{componentName="Card";$pcCard=c(Un,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(_,{self:!0});_componentStyle=c(Hn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){Rt(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(n=>{this.el.nativeElement.style[n]=t[n]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=U(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=m(e)))(i||e)}})();static \u0275cmp=O({type:e,selectors:[["p-card"]],contentQueries:function(n,i,r){if(n&1&&Pt(r,Qe,5)(r,Ze,5)(r,no,4)(r,io,4)(r,oo,4)(r,ro,4)(r,so,4)(r,Ht,4),n&2){let s;k(s=P())&&(i.headerFacet=s.first),k(s=P())&&(i.footerFacet=s.first),k(s=P())&&(i.headerTemplate=s.first),k(s=P())&&(i.titleTemplate=s.first),k(s=P())&&(i.subtitleTemplate=s.first),k(s=P())&&(i.contentTemplate=s.first),k(s=P())&&(i.footerTemplate=s.first),k(s=P())&&(i.templates=s)}},hostVars:4,hostBindings:function(n,i){n&2&&(Nt(i._style()),b(i.cn(i.cx("root"),i.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[S([Hn,{provide:Un,useExisting:e},{provide:Y,useExisting:e}]),tt([_]),y],ngContentSelectors:lo,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,i){n&1&&(nt(ao),A(0,co,3,4,"div",0),W(1,"div",1),A(2,fo,3,5,"div",0)(3,bo,3,5,"div",0),W(4,"div",1),Q(5),A(6,yo,1,0,"ng-container",2),q(),A(7,_o,3,4,"div",0),q()),n&2&&(p("ngIf",i.headerFacet||i.headerTemplate||i._headerTemplate),f(),b(i.cx("body")),p("pBind",i.ptm("body")),f(),p("ngIf",i.header||i.titleTemplate||i._titleTemplate),f(),p("ngIf",i.subheader||i.subtitleTemplate||i._subtitleTemplate),f(),b(i.cx("content")),p("pBind",i.ptm("content")),f(2),p("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),f(),p("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate))},dependencies:[R,Ot,$t,L,yt,_],encapsulation:2,changeDetection:0})}return e})(),Se=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[wo,L,yt,L,yt]})}return e})();var zn=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=w({type:e});static \u0275inj=C({imports:[R,ye,ve,se,we,Se,R,ye,ve,se,we,Se]})};export{sn as a,an as b,Vt as c,zo as d,vi as e,ye as f,Mt as g,Y as h,N as i,Ce as j,ur as k,cr as l,Dn as m,wn as n,_ as o,yt as p,xn as q,Tn as r,kn as s,Bn as t,Mn as u,eo as v,we as w,wo as x,Se as y,zn as z};
