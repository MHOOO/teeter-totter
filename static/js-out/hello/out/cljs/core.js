goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____11695 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____11695))
{return or__3576__auto____11695;
} else
{var or__3576__auto____11696 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____11696))
{return or__3576__auto____11696;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____11697 = coll;

if(cljs.core.truth_(and__3574__auto____11697))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____11697;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____11698 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11698))
{return or__3576__auto____11698;
} else
{return (_count["_"]);
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____11699 = coll;

if(cljs.core.truth_(and__3574__auto____11699))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____11699;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____11700 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11700))
{return or__3576__auto____11700;
} else
{return (_empty["_"]);
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____11701 = coll;

if(cljs.core.truth_(and__3574__auto____11701))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____11701;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____11702 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11702))
{return or__3576__auto____11702;
} else
{return (_conj["_"]);
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__11707 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____11703 = coll;

if(cljs.core.truth_(and__3574__auto____11703))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____11703;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____11704 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11704))
{return or__3576__auto____11704;
} else
{return (_nth["_"]);
}
})().call(null,coll,n);
}
});
var _nth__11708 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____11705 = coll;

if(cljs.core.truth_(and__3574__auto____11705))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____11705;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____11706 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11706))
{return or__3576__auto____11706;
} else
{return (_nth["_"]);
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__11707.call(this,coll,n);
case  3 :
return _nth__11708.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____11710 = coll;

if(cljs.core.truth_(and__3574__auto____11710))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____11710;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____11711 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11711))
{return or__3576__auto____11711;
} else
{return (_first["_"]);
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____11712 = coll;

if(cljs.core.truth_(and__3574__auto____11712))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____11712;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____11713 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11713))
{return or__3576__auto____11713;
} else
{return (_rest["_"]);
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__11718 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____11714 = o;

if(cljs.core.truth_(and__3574__auto____11714))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____11714;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____11715 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11715))
{return or__3576__auto____11715;
} else
{return (_lookup["_"]);
}
})().call(null,o,k);
}
});
var _lookup__11719 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____11716 = o;

if(cljs.core.truth_(and__3574__auto____11716))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____11716;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____11717 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11717))
{return or__3576__auto____11717;
} else
{return (_lookup["_"]);
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__11718.call(this,o,k);
case  3 :
return _lookup__11719.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____11721 = coll;

if(cljs.core.truth_(and__3574__auto____11721))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____11721;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____11722 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11722))
{return or__3576__auto____11722;
} else
{return (_contains_key_QMARK_["_"]);
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____11723 = coll;

if(cljs.core.truth_(and__3574__auto____11723))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____11723;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____11724 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11724))
{return or__3576__auto____11724;
} else
{return (_assoc["_"]);
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____11725 = coll;

if(cljs.core.truth_(and__3574__auto____11725))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____11725;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____11726 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11726))
{return or__3576__auto____11726;
} else
{return (_dissoc["_"]);
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____11727 = coll;

if(cljs.core.truth_(and__3574__auto____11727))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____11727;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____11728 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11728))
{return or__3576__auto____11728;
} else
{return (_disjoin["_"]);
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____11729 = coll;

if(cljs.core.truth_(and__3574__auto____11729))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____11729;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____11730 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11730))
{return or__3576__auto____11730;
} else
{return (_peek["_"]);
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____11731 = coll;

if(cljs.core.truth_(and__3574__auto____11731))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____11731;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____11732 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11732))
{return or__3576__auto____11732;
} else
{return (_pop["_"]);
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____11733 = coll;

if(cljs.core.truth_(and__3574__auto____11733))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____11733;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____11734 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11734))
{return or__3576__auto____11734;
} else
{return (_assoc_n["_"]);
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____11735 = o;

if(cljs.core.truth_(and__3574__auto____11735))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____11735;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____11736 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11736))
{return or__3576__auto____11736;
} else
{return (_deref["_"]);
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____11737 = o;

if(cljs.core.truth_(and__3574__auto____11737))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____11737;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____11738 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11738))
{return or__3576__auto____11738;
} else
{return (_deref_with_timeout["_"]);
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____11739 = o;

if(cljs.core.truth_(and__3574__auto____11739))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____11739;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____11740 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11740))
{return or__3576__auto____11740;
} else
{return (_meta["_"]);
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____11741 = o;

if(cljs.core.truth_(and__3574__auto____11741))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____11741;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____11742 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11742))
{return or__3576__auto____11742;
} else
{return (_with_meta["_"]);
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__11747 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____11743 = coll;

if(cljs.core.truth_(and__3574__auto____11743))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____11743;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____11744 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11744))
{return or__3576__auto____11744;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f);
}
});
var _reduce__11748 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____11745 = coll;

if(cljs.core.truth_(and__3574__auto____11745))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____11745;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____11746 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____11746))
{return or__3576__auto____11746;
} else
{return (_reduce["_"]);
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__11747.call(this,coll,f);
case  3 :
return _reduce__11748.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____11750 = o;

if(cljs.core.truth_(and__3574__auto____11750))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____11750;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____11751 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11751))
{return or__3576__auto____11751;
} else
{return (_equiv["_"]);
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____11752 = o;

if(cljs.core.truth_(and__3574__auto____11752))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____11752;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____11753 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11753))
{return or__3576__auto____11753;
} else
{return (_hash["_"]);
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____11754 = o;

if(cljs.core.truth_(and__3574__auto____11754))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____11754;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____11755 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11755))
{return or__3576__auto____11755;
} else
{return (_seq["_"]);
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____11756 = o;

if(cljs.core.truth_(and__3574__auto____11756))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____11756;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____11757 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____11757))
{return or__3576__auto____11757;
} else
{return (_pr_seq["_"]);
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____11758 = d;

if(cljs.core.truth_(and__3574__auto____11758))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____11758;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____11759 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____11759))
{return or__3576__auto____11759;
} else
{return (_realized_QMARK_["_"]);
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__11760 = null;
var G__11760__11761 = (function (_,n){
return null;
});
var G__11760__11762 = (function (_,n,not_found){
return not_found;
});
G__11760 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__11760__11761.call(this,_,n);
case  3 :
return G__11760__11762.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11760;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__11764 = null;
var G__11764__11765 = (function (_,f){
return f.call(null);
});
var G__11764__11766 = (function (_,f,start){
return start;
});
G__11764 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__11764__11765.call(this,_,f);
case  3 :
return G__11764__11766.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11764;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__11768 = null;
var G__11768__11769 = (function (o,k){
return null;
});
var G__11768__11770 = (function (o,k,not_found){
return not_found;
});
G__11768 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__11768__11769.call(this,o,k);
case  3 :
return G__11768__11770.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11768;
})()
);
goog.global['Date'].prototype.cljs$core$IEquiv$ = true;
goog.global['Date'].prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__11778 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__11772 = cljs.core._nth.call(null,cicoll,0);
var n__11773 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__11773,cljs.core._count.call(null,cicoll))))
{{
var G__11782 = f.call(null,val__11772,cljs.core._nth.call(null,cicoll,n__11773));
var G__11783 = cljs.core.inc.call(null,n__11773);
val__11772 = G__11782;
n__11773 = G__11783;
continue;
}
} else
{return val__11772;
}
break;
}
}
});
var ci_reduce__11779 = (function (cicoll,f,val){
var val__11774 = val;
var n__11775 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__11775,cljs.core._count.call(null,cicoll))))
{{
var G__11784 = f.call(null,val__11774,cljs.core._nth.call(null,cicoll,n__11775));
var G__11785 = cljs.core.inc.call(null,n__11775);
val__11774 = G__11784;
n__11775 = G__11785;
continue;
}
} else
{return val__11774;
}
break;
}
});
var ci_reduce__11780 = (function (cicoll,f,val,idx){
var val__11776 = val;
var n__11777 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__11777,cljs.core._count.call(null,cicoll))))
{{
var G__11786 = f.call(null,val__11776,cljs.core._nth.call(null,cicoll,n__11777));
var G__11787 = cljs.core.inc.call(null,n__11777);
val__11776 = G__11786;
n__11777 = G__11787;
continue;
}
} else
{return val__11776;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__11778.call(this,cicoll,f);
case  3 :
return ci_reduce__11779.call(this,cicoll,f,val);
case  4 :
return ci_reduce__11780.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11794 = null;
var G__11794__11795 = (function (_,f){
var this__11788 = this;
return cljs.core.ci_reduce.call(null,this__11788.a,f,(this__11788.a[this__11788.i]),cljs.core.inc.call(null,this__11788.i));
});
var G__11794__11796 = (function (_,f,start){
var this__11789 = this;
return cljs.core.ci_reduce.call(null,this__11789.a,f,start,this__11789.i);
});
G__11794 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__11794__11795.call(this,_,f);
case  3 :
return G__11794__11796.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11794;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11790 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__11791 = this;
return (this__11791.a[this__11791.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__11792 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__11792.i),cljs.core._count.call(null,this__11792.a))))
{return (new cljs.core.IndexedSeq(this__11792.a,cljs.core.inc.call(null,this__11792.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__11793 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,prim))))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__11798 = null;
var G__11798__11799 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__11798__11800 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__11798 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__11798__11799.call(this,array,f);
case  3 :
return G__11798__11800.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11798;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11802 = null;
var G__11802__11803 = (function (array,k){
return (array[k]);
});
var G__11802__11804 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__11802 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__11802__11803.call(this,array,k);
case  3 :
return G__11802__11804.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11802;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11806 = null;
var G__11806__11807 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__11806__11808 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__11806 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__11806__11807.call(this,array,n);
case  3 :
return G__11806__11808.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11806;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____11810 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____11810))
{var s__11811 = temp__3726__auto____11810;

return cljs.core._first.call(null,s__11811);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__11812 = cljs.core.next.call(null,s);
s = G__11812;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__11813 = cljs.core.seq.call(null,x);
var n__11814 = 0;

while(true){
if(cljs.core.truth_(s__11813))
{{
var G__11815 = cljs.core.next.call(null,s__11813);
var G__11816 = cljs.core.inc.call(null,n__11814);
s__11813 = G__11815;
n__11814 = G__11816;
continue;
}
} else
{return n__11814;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__11817 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__11818 = (function() { 
var G__11820__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11821 = conj.call(null,coll,x);
var G__11822 = cljs.core.first.call(null,xs);
var G__11823 = cljs.core.next.call(null,xs);
coll = G__11821;
x = G__11822;
xs = G__11823;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11820 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11820__delegate.call(this, coll, x, xs);
};
G__11820.cljs$lang$maxFixedArity = 2;
G__11820.cljs$lang$applyTo = (function (arglist__11824){
var coll = cljs.core.first(arglist__11824);
var x = cljs.core.first(cljs.core.next(arglist__11824));
var xs = cljs.core.rest(cljs.core.next(arglist__11824));
return G__11820__delegate.call(this, coll, x, xs);
});
return G__11820;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__11817.call(this,coll,x);
default:
return conj__11818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__11818.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__11825 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__11826 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__11825.call(this,coll,n);
case  3 :
return nth__11826.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__11828 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__11829 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__11828.call(this,o,k);
case  3 :
return get__11829.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__11832 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__11833 = (function() { 
var G__11835__delegate = function (coll,k,v,kvs){
while(true){
var ret__11831 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__11836 = ret__11831;
var G__11837 = cljs.core.first.call(null,kvs);
var G__11838 = cljs.core.second.call(null,kvs);
var G__11839 = cljs.core.nnext.call(null,kvs);
coll = G__11836;
k = G__11837;
v = G__11838;
kvs = G__11839;
continue;
}
} else
{return ret__11831;
}
break;
}
};
var G__11835 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11835__delegate.call(this, coll, k, v, kvs);
};
G__11835.cljs$lang$maxFixedArity = 3;
G__11835.cljs$lang$applyTo = (function (arglist__11840){
var coll = cljs.core.first(arglist__11840);
var k = cljs.core.first(cljs.core.next(arglist__11840));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11840)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11840)));
return G__11835__delegate.call(this, coll, k, v, kvs);
});
return G__11835;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__11832.call(this,coll,k,v);
default:
return assoc__11833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__11833.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__11842 = (function (coll){
return coll;
});
var dissoc__11843 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__11844 = (function() { 
var G__11846__delegate = function (coll,k,ks){
while(true){
var ret__11841 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__11847 = ret__11841;
var G__11848 = cljs.core.first.call(null,ks);
var G__11849 = cljs.core.next.call(null,ks);
coll = G__11847;
k = G__11848;
ks = G__11849;
continue;
}
} else
{return ret__11841;
}
break;
}
};
var G__11846 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11846__delegate.call(this, coll, k, ks);
};
G__11846.cljs$lang$maxFixedArity = 2;
G__11846.cljs$lang$applyTo = (function (arglist__11850){
var coll = cljs.core.first(arglist__11850);
var k = cljs.core.first(cljs.core.next(arglist__11850));
var ks = cljs.core.rest(cljs.core.next(arglist__11850));
return G__11846__delegate.call(this, coll, k, ks);
});
return G__11846;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__11842.call(this,coll);
case  2 :
return dissoc__11843.call(this,coll,k);
default:
return dissoc__11844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__11844.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__3995__auto____11851 = o;

if(cljs.core.truth_((function (){var and__3574__auto____11852 = x__3995__auto____11851;

if(cljs.core.truth_(and__3574__auto____11852))
{return x__3995__auto____11851.cljs$core$IMeta$;
} else
{return and__3574__auto____11852;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3995__auto____11851);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__11854 = (function (coll){
return coll;
});
var disj__11855 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__11856 = (function() { 
var G__11858__delegate = function (coll,k,ks){
while(true){
var ret__11853 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__11859 = ret__11853;
var G__11860 = cljs.core.first.call(null,ks);
var G__11861 = cljs.core.next.call(null,ks);
coll = G__11859;
k = G__11860;
ks = G__11861;
continue;
}
} else
{return ret__11853;
}
break;
}
};
var G__11858 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11858__delegate.call(this, coll, k, ks);
};
G__11858.cljs$lang$maxFixedArity = 2;
G__11858.cljs$lang$applyTo = (function (arglist__11862){
var coll = cljs.core.first(arglist__11862);
var k = cljs.core.first(cljs.core.next(arglist__11862));
var ks = cljs.core.rest(cljs.core.next(arglist__11862));
return G__11858__delegate.call(this, coll, k, ks);
});
return G__11858;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__11854.call(this,coll);
case  2 :
return disj__11855.call(this,coll,k);
default:
return disj__11856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__11856.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__3995__auto____11863 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11864 = x__3995__auto____11863;

if(cljs.core.truth_(and__3574__auto____11864))
{return x__3995__auto____11863.cljs$core$ICollection$;
} else
{return and__3574__auto____11864;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__3995__auto____11863);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__3995__auto____11865 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11866 = x__3995__auto____11865;

if(cljs.core.truth_(and__3574__auto____11866))
{return x__3995__auto____11865.cljs$core$ISet$;
} else
{return and__3574__auto____11866;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__3995__auto____11865);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__3995__auto____11867 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11868 = x__3995__auto____11867;

if(cljs.core.truth_(and__3574__auto____11868))
{return x__3995__auto____11867.cljs$core$IAssociative$;
} else
{return and__3574__auto____11868;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__3995__auto____11867);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__3995__auto____11869 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11870 = x__3995__auto____11869;

if(cljs.core.truth_(and__3574__auto____11870))
{return x__3995__auto____11869.cljs$core$ISequential$;
} else
{return and__3574__auto____11870;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__3995__auto____11869);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__3995__auto____11871 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11872 = x__3995__auto____11871;

if(cljs.core.truth_(and__3574__auto____11872))
{return x__3995__auto____11871.cljs$core$ICounted$;
} else
{return and__3574__auto____11872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__3995__auto____11871);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__3995__auto____11873 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11874 = x__3995__auto____11873;

if(cljs.core.truth_(and__3574__auto____11874))
{return x__3995__auto____11873.cljs$core$IMap$;
} else
{return and__3574__auto____11874;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__3995__auto____11873);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__3995__auto____11875 = x;

if(cljs.core.truth_((function (){var and__3574__auto____11876 = x__3995__auto____11875;

if(cljs.core.truth_(and__3574__auto____11876))
{return x__3995__auto____11875.cljs$core$IVector$;
} else
{return and__3574__auto____11876;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__3995__auto____11875);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__11877 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__11877.push(key);
}));
return keys__11877;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__3995__auto____11878 = s;

if(cljs.core.truth_((function (){var and__3574__auto____11879 = x__3995__auto____11878;

if(cljs.core.truth_(and__3574__auto____11879))
{return x__3995__auto____11878.cljs$core$ISeq$;
} else
{return and__3574__auto____11879;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__3995__auto____11878);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____11880 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____11880))
{return cljs.core.not.call(null,(function (){var or__3576__auto____11881 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____11881))
{return or__3576__auto____11881;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____11880;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____11882 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____11882))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____11882;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____11883 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____11883))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____11883;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____11884 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____11884))
{return (n == n.toFixed());
} else
{return and__3574__auto____11884;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____11885 = coll;

if(cljs.core.truth_(and__3574__auto____11885))
{var and__3574__auto____11886 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____11886))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____11886;
}
} else
{return and__3574__auto____11885;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___11891 = (function (x){
return true;
});
var distinct_QMARK___11892 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___11893 = (function() { 
var G__11895__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__11887 = cljs.core.set([y,x]);
var xs__11888 = more;

while(true){
var x__11889 = cljs.core.first.call(null,xs__11888);
var etc__11890 = cljs.core.next.call(null,xs__11888);

if(cljs.core.truth_(xs__11888))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__11887,x__11889)))
{return false;
} else
{{
var G__11896 = cljs.core.conj.call(null,s__11887,x__11889);
var G__11897 = etc__11890;
s__11887 = G__11896;
xs__11888 = G__11897;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__11895 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11895__delegate.call(this, x, y, more);
};
G__11895.cljs$lang$maxFixedArity = 2;
G__11895.cljs$lang$applyTo = (function (arglist__11898){
var x = cljs.core.first(arglist__11898);
var y = cljs.core.first(cljs.core.next(arglist__11898));
var more = cljs.core.rest(cljs.core.next(arglist__11898));
return G__11895__delegate.call(this, x, y, more);
});
return G__11895;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___11891.call(this,x);
case  2 :
return distinct_QMARK___11892.call(this,x,y);
default:
return distinct_QMARK___11893.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___11893.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__11899 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__11899)))
{return r__11899;
} else
{if(cljs.core.truth_(r__11899))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__11901 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__11902 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__11900 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__11900,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__11900);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__11901.call(this,comp);
case  2 :
return sort__11902.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__11904 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__11905 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__11904.call(this,keyfn,comp);
case  3 :
return sort_by__11905.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__11907 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__11908 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__11907.call(this,f,val);
case  3 :
return reduce__11908.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__11914 = (function (f,coll){
var temp__3723__auto____11910 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____11910))
{var s__11911 = temp__3723__auto____11910;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__11911),cljs.core.next.call(null,s__11911));
} else
{return f.call(null);
}
});
var seq_reduce__11915 = (function (f,val,coll){
var val__11912 = val;
var coll__11913 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__11913))
{{
var G__11917 = f.call(null,val__11912,cljs.core.first.call(null,coll__11913));
var G__11918 = cljs.core.next.call(null,coll__11913);
val__11912 = G__11917;
coll__11913 = G__11918;
continue;
}
} else
{return val__11912;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__11914.call(this,f,val);
case  3 :
return seq_reduce__11915.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__11919 = null;
var G__11919__11920 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__11919__11921 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__11919 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__11919__11920.call(this,coll,f);
case  3 :
return G__11919__11921.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11919;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___11923 = (function (){
return 0;
});
var _PLUS___11924 = (function (x){
return x;
});
var _PLUS___11925 = (function (x,y){
return (x + y);
});
var _PLUS___11926 = (function() { 
var G__11928__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__11928 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11928__delegate.call(this, x, y, more);
};
G__11928.cljs$lang$maxFixedArity = 2;
G__11928.cljs$lang$applyTo = (function (arglist__11929){
var x = cljs.core.first(arglist__11929);
var y = cljs.core.first(cljs.core.next(arglist__11929));
var more = cljs.core.rest(cljs.core.next(arglist__11929));
return G__11928__delegate.call(this, x, y, more);
});
return G__11928;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___11923.call(this);
case  1 :
return _PLUS___11924.call(this,x);
case  2 :
return _PLUS___11925.call(this,x,y);
default:
return _PLUS___11926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___11926.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___11930 = (function (x){
return (- x);
});
var ___11931 = (function (x,y){
return (x - y);
});
var ___11932 = (function() { 
var G__11934__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__11934 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11934__delegate.call(this, x, y, more);
};
G__11934.cljs$lang$maxFixedArity = 2;
G__11934.cljs$lang$applyTo = (function (arglist__11935){
var x = cljs.core.first(arglist__11935);
var y = cljs.core.first(cljs.core.next(arglist__11935));
var more = cljs.core.rest(cljs.core.next(arglist__11935));
return G__11934__delegate.call(this, x, y, more);
});
return G__11934;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___11930.call(this,x);
case  2 :
return ___11931.call(this,x,y);
default:
return ___11932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___11932.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___11936 = (function (){
return 1;
});
var _STAR___11937 = (function (x){
return x;
});
var _STAR___11938 = (function (x,y){
return (x * y);
});
var _STAR___11939 = (function() { 
var G__11941__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__11941 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11941__delegate.call(this, x, y, more);
};
G__11941.cljs$lang$maxFixedArity = 2;
G__11941.cljs$lang$applyTo = (function (arglist__11942){
var x = cljs.core.first(arglist__11942);
var y = cljs.core.first(cljs.core.next(arglist__11942));
var more = cljs.core.rest(cljs.core.next(arglist__11942));
return G__11941__delegate.call(this, x, y, more);
});
return G__11941;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___11936.call(this);
case  1 :
return _STAR___11937.call(this,x);
case  2 :
return _STAR___11938.call(this,x,y);
default:
return _STAR___11939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___11939.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___11943 = (function (x){
return (1 / x);
});
var _SLASH___11944 = (function (x,y){
return (x / y);
});
var _SLASH___11945 = (function() { 
var G__11947__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__11947 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11947__delegate.call(this, x, y, more);
};
G__11947.cljs$lang$maxFixedArity = 2;
G__11947.cljs$lang$applyTo = (function (arglist__11948){
var x = cljs.core.first(arglist__11948);
var y = cljs.core.first(cljs.core.next(arglist__11948));
var more = cljs.core.rest(cljs.core.next(arglist__11948));
return G__11947__delegate.call(this, x, y, more);
});
return G__11947;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___11943.call(this,x);
case  2 :
return _SLASH___11944.call(this,x,y);
default:
return _SLASH___11945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___11945.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___11949 = (function (x){
return true;
});
var _LT___11950 = (function (x,y){
return (x < y);
});
var _LT___11951 = (function() { 
var G__11953__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11954 = y;
var G__11955 = cljs.core.first.call(null,more);
var G__11956 = cljs.core.next.call(null,more);
x = G__11954;
y = G__11955;
more = G__11956;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11953 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11953__delegate.call(this, x, y, more);
};
G__11953.cljs$lang$maxFixedArity = 2;
G__11953.cljs$lang$applyTo = (function (arglist__11957){
var x = cljs.core.first(arglist__11957);
var y = cljs.core.first(cljs.core.next(arglist__11957));
var more = cljs.core.rest(cljs.core.next(arglist__11957));
return G__11953__delegate.call(this, x, y, more);
});
return G__11953;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___11949.call(this,x);
case  2 :
return _LT___11950.call(this,x,y);
default:
return _LT___11951.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___11951.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___11958 = (function (x){
return true;
});
var _LT__EQ___11959 = (function (x,y){
return (x <= y);
});
var _LT__EQ___11960 = (function() { 
var G__11962__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11963 = y;
var G__11964 = cljs.core.first.call(null,more);
var G__11965 = cljs.core.next.call(null,more);
x = G__11963;
y = G__11964;
more = G__11965;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11962 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11962__delegate.call(this, x, y, more);
};
G__11962.cljs$lang$maxFixedArity = 2;
G__11962.cljs$lang$applyTo = (function (arglist__11966){
var x = cljs.core.first(arglist__11966);
var y = cljs.core.first(cljs.core.next(arglist__11966));
var more = cljs.core.rest(cljs.core.next(arglist__11966));
return G__11962__delegate.call(this, x, y, more);
});
return G__11962;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___11958.call(this,x);
case  2 :
return _LT__EQ___11959.call(this,x,y);
default:
return _LT__EQ___11960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___11960.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___11967 = (function (x){
return true;
});
var _GT___11968 = (function (x,y){
return (x > y);
});
var _GT___11969 = (function() { 
var G__11971__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11972 = y;
var G__11973 = cljs.core.first.call(null,more);
var G__11974 = cljs.core.next.call(null,more);
x = G__11972;
y = G__11973;
more = G__11974;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11971 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11971__delegate.call(this, x, y, more);
};
G__11971.cljs$lang$maxFixedArity = 2;
G__11971.cljs$lang$applyTo = (function (arglist__11975){
var x = cljs.core.first(arglist__11975);
var y = cljs.core.first(cljs.core.next(arglist__11975));
var more = cljs.core.rest(cljs.core.next(arglist__11975));
return G__11971__delegate.call(this, x, y, more);
});
return G__11971;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___11967.call(this,x);
case  2 :
return _GT___11968.call(this,x,y);
default:
return _GT___11969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___11969.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___11976 = (function (x){
return true;
});
var _GT__EQ___11977 = (function (x,y){
return (x >= y);
});
var _GT__EQ___11978 = (function() { 
var G__11980__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__11981 = y;
var G__11982 = cljs.core.first.call(null,more);
var G__11983 = cljs.core.next.call(null,more);
x = G__11981;
y = G__11982;
more = G__11983;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__11980 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11980__delegate.call(this, x, y, more);
};
G__11980.cljs$lang$maxFixedArity = 2;
G__11980.cljs$lang$applyTo = (function (arglist__11984){
var x = cljs.core.first(arglist__11984);
var y = cljs.core.first(cljs.core.next(arglist__11984));
var more = cljs.core.rest(cljs.core.next(arglist__11984));
return G__11980__delegate.call(this, x, y, more);
});
return G__11980;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___11976.call(this,x);
case  2 :
return _GT__EQ___11977.call(this,x,y);
default:
return _GT__EQ___11978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___11978.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__11985 = (function (x){
return x;
});
var max__11986 = (function (x,y){
return ((x > y) ? x : y);
});
var max__11987 = (function() { 
var G__11989__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__11989 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11989__delegate.call(this, x, y, more);
};
G__11989.cljs$lang$maxFixedArity = 2;
G__11989.cljs$lang$applyTo = (function (arglist__11990){
var x = cljs.core.first(arglist__11990);
var y = cljs.core.first(cljs.core.next(arglist__11990));
var more = cljs.core.rest(cljs.core.next(arglist__11990));
return G__11989__delegate.call(this, x, y, more);
});
return G__11989;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__11985.call(this,x);
case  2 :
return max__11986.call(this,x,y);
default:
return max__11987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__11987.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__11991 = (function (x){
return x;
});
var min__11992 = (function (x,y){
return ((x < y) ? x : y);
});
var min__11993 = (function() { 
var G__11995__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__11995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11995__delegate.call(this, x, y, more);
};
G__11995.cljs$lang$maxFixedArity = 2;
G__11995.cljs$lang$applyTo = (function (arglist__11996){
var x = cljs.core.first(arglist__11996);
var y = cljs.core.first(cljs.core.next(arglist__11996));
var more = cljs.core.rest(cljs.core.next(arglist__11996));
return G__11995__delegate.call(this, x, y, more);
});
return G__11995;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__11991.call(this,x);
case  2 :
return min__11992.call(this,x,y);
default:
return min__11993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__11993.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__11997 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__11997) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__11998 = cljs.core.quot.call(null,n,d);

return (n - (d * q__11998));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__11999 = (function (){
return Math.random.call(null);
});
var rand__12000 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__11999.call(this);
case  1 :
return rand__12000.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___12002 = (function (x){
return true;
});
var _EQ__EQ___12003 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___12004 = (function() { 
var G__12006__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__12007 = y;
var G__12008 = cljs.core.first.call(null,more);
var G__12009 = cljs.core.next.call(null,more);
x = G__12007;
y = G__12008;
more = G__12009;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__12006 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12006__delegate.call(this, x, y, more);
};
G__12006.cljs$lang$maxFixedArity = 2;
G__12006.cljs$lang$applyTo = (function (arglist__12010){
var x = cljs.core.first(arglist__12010);
var y = cljs.core.first(cljs.core.next(arglist__12010));
var more = cljs.core.rest(cljs.core.next(arglist__12010));
return G__12006__delegate.call(this, x, y, more);
});
return G__12006;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___12002.call(this,x);
case  2 :
return _EQ__EQ___12003.call(this,x,y);
default:
return _EQ__EQ___12004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___12004.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__12011 = n;
var xs__12012 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____12013 = xs__12012;

if(cljs.core.truth_(and__3574__auto____12013))
{return cljs.core.pos_QMARK_.call(null,n__12011);
} else
{return and__3574__auto____12013;
}
})()))
{{
var G__12014 = cljs.core.dec.call(null,n__12011);
var G__12015 = cljs.core.next.call(null,xs__12012);
n__12011 = G__12014;
xs__12012 = G__12015;
continue;
}
} else
{return xs__12012;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__12020 = null;
var G__12020__12021 = (function (coll,n){
var temp__3723__auto____12016 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____12016))
{var xs__12017 = temp__3723__auto____12016;

return cljs.core.first.call(null,xs__12017);
} else
{throw "Index out of bounds";
}
});
var G__12020__12022 = (function (coll,n,not_found){
var temp__3723__auto____12018 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____12018))
{var xs__12019 = temp__3723__auto____12018;

return cljs.core.first.call(null,xs__12019);
} else
{return not_found;
}
});
G__12020 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12020__12021.call(this,coll,n);
case  3 :
return G__12020__12022.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12020;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__12024 = (function (){
return "";
});
var str__12025 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__12026 = (function() { 
var G__12028__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12029 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__12030 = cljs.core.next.call(null,more);
sb = G__12029;
more = G__12030;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__12028 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12028__delegate.call(this, x, ys);
};
G__12028.cljs$lang$maxFixedArity = 1;
G__12028.cljs$lang$applyTo = (function (arglist__12031){
var x = cljs.core.first(arglist__12031);
var ys = cljs.core.rest(arglist__12031);
return G__12028__delegate.call(this, x, ys);
});
return G__12028;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__12024.call(this);
case  1 :
return str__12025.call(this,x);
default:
return str__12026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__12026.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__12032 = (function (s,start){
return s.substring(start);
});
var subs__12033 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__12032.call(this,s,start);
case  3 :
return subs__12033.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__12035 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__12036 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__12035.call(this,ns);
case  2 :
return symbol__12036.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__12038 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__12039 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__12038.call(this,ns);
case  2 :
return keyword__12039.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__12041 = cljs.core.seq.call(null,x);
var ys__12042 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__12041)))
{return cljs.core.nil_QMARK_.call(null,ys__12042);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__12042)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__12041),cljs.core.first.call(null,ys__12042))))
{{
var G__12043 = cljs.core.next.call(null,xs__12041);
var G__12044 = cljs.core.next.call(null,ys__12042);
xs__12041 = G__12043;
ys__12042 = G__12044;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__12045_SHARP_,p2__12046_SHARP_){
return cljs.core.hash_combine.call(null,p1__12045_SHARP_,cljs.core.hash.call(null,p2__12046_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12047 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12048 = this;
return (new cljs.core.List(this__12048.meta,o,coll,cljs.core.inc.call(null,this__12048.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12049 = this;
return this__12049.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12050 = this;
return this__12050.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12051 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12052 = this;
return this__12052.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12053 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12054 = this;
return (new cljs.core.List(meta,this__12054.first,this__12054.rest,this__12054.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12055 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12056 = this;
return this__12056.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12057 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12058 = this;
return this__12058.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12059 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12060 = this;
return (new cljs.core.List(this__12060.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12061 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12062 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12063 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12064 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12065 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12066 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12067 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12068 = this;
return this__12068.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12069 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12070 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__12071){
var items = cljs.core.seq( arglist__12071 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12072 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12073 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12074 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12075 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12075.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12076 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12077 = this;
return this__12077.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12078 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12078.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__12078.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12079 = this;
return this__12079.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12080 = this;
return (new cljs.core.Cons(meta,this__12080.first,this__12080.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__12081 = null;
var G__12081__12082 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__12081__12083 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__12081 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__12081__12082.call(this,string,f);
case  3 :
return G__12081__12083.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12081;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__12085 = null;
var G__12085__12086 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__12085__12087 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__12085 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__12085__12086.call(this,string,k);
case  3 :
return G__12085__12087.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12085;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__12089 = null;
var G__12089__12090 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__12089__12091 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__12089 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__12089__12090.call(this,string,n);
case  3 :
return G__12089__12091.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12089;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
goog.global['String']['prototype']['call'] = (function() {
var G__12093 = null;
var G__12093__12094 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__12093__12095 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__12093 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__12093__12094.call(this,_,coll);
case  3 :
return G__12093__12095.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12093;
})()
;
goog.global['String']['prototype']['apply'] = (function (_,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return this.call(null,(args[0]));
} else
{return this.call(null,(args[0]),(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__12097 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__12097;
} else
{lazy_seq.x = x__12097.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12098 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12100 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12101 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12101.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12102 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12103 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12104 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12105 = this;
return this__12105.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12106 = this;
return (new cljs.core.LazySeq(meta,this__12106.realized,this__12106.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__12107 = cljs.core.array.call(null);

var s__12108 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12108)))
{ary__12107.push(cljs.core.first.call(null,s__12108));
{
var G__12109 = cljs.core.next.call(null,s__12108);
s__12108 = G__12109;
continue;
}
} else
{return ary__12107;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__12110 = s;
var i__12111 = n;
var sum__12112 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____12113 = cljs.core.pos_QMARK_.call(null,i__12111);

if(cljs.core.truth_(and__3574__auto____12113))
{return cljs.core.seq.call(null,s__12110);
} else
{return and__3574__auto____12113;
}
})()))
{{
var G__12114 = cljs.core.next.call(null,s__12110);
var G__12115 = cljs.core.dec.call(null,i__12111);
var G__12116 = cljs.core.inc.call(null,sum__12112);
s__12110 = G__12114;
i__12111 = G__12115;
sum__12112 = G__12116;
continue;
}
} else
{return sum__12112;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__12120 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__12121 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__12122 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12117 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__12117))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12117),concat.call(null,cljs.core.rest.call(null,s__12117),y));
} else
{return y;
}
})));
});
var concat__12123 = (function() { 
var G__12125__delegate = function (x,y,zs){
var cat__12119 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__12118 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__12118))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__12118),cat.call(null,cljs.core.rest.call(null,xys__12118),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__12119.call(null,concat.call(null,x,y),zs);
};
var G__12125 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12125__delegate.call(this, x, y, zs);
};
G__12125.cljs$lang$maxFixedArity = 2;
G__12125.cljs$lang$applyTo = (function (arglist__12126){
var x = cljs.core.first(arglist__12126);
var y = cljs.core.first(cljs.core.next(arglist__12126));
var zs = cljs.core.rest(cljs.core.next(arglist__12126));
return G__12125__delegate.call(this, x, y, zs);
});
return G__12125;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__12120.call(this);
case  1 :
return concat__12121.call(this,x);
case  2 :
return concat__12122.call(this,x,y);
default:
return concat__12123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__12123.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___12127 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___12128 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___12129 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___12130 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___12131 = (function() { 
var G__12133__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__12133 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12133__delegate.call(this, a, b, c, d, more);
};
G__12133.cljs$lang$maxFixedArity = 4;
G__12133.cljs$lang$applyTo = (function (arglist__12134){
var a = cljs.core.first(arglist__12134);
var b = cljs.core.first(cljs.core.next(arglist__12134));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12134)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12134))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12134))));
return G__12133__delegate.call(this, a, b, c, d, more);
});
return G__12133;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___12127.call(this,a);
case  2 :
return list_STAR___12128.call(this,a,b);
case  3 :
return list_STAR___12129.call(this,a,b,c);
case  4 :
return list_STAR___12130.call(this,a,b,c,d);
default:
return list_STAR___12131.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___12131.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__12144 = (function (f,args){
var fixed_arity__12135 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__12135)),fixed_arity__12135)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__12145 = (function (f,x,args){
var arglist__12136 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__12137 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12136,fixed_arity__12137),fixed_arity__12137)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12136));
} else
{return f.cljs$lang$applyTo(arglist__12136);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12136));
}
});
var apply__12146 = (function (f,x,y,args){
var arglist__12138 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__12139 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12138,fixed_arity__12139),fixed_arity__12139)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12138));
} else
{return f.cljs$lang$applyTo(arglist__12138);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12138));
}
});
var apply__12147 = (function (f,x,y,z,args){
var arglist__12140 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__12141 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12140,fixed_arity__12141),fixed_arity__12141)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12140));
} else
{return f.cljs$lang$applyTo(arglist__12140);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12140));
}
});
var apply__12148 = (function() { 
var G__12150__delegate = function (f,a,b,c,d,args){
var arglist__12142 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__12143 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__12142,fixed_arity__12143),fixed_arity__12143)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__12142));
} else
{return f.cljs$lang$applyTo(arglist__12142);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__12142));
}
};
var G__12150 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12150__delegate.call(this, f, a, b, c, d, args);
};
G__12150.cljs$lang$maxFixedArity = 5;
G__12150.cljs$lang$applyTo = (function (arglist__12151){
var f = cljs.core.first(arglist__12151);
var a = cljs.core.first(cljs.core.next(arglist__12151));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12151)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12151))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12151)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12151)))));
return G__12150__delegate.call(this, f, a, b, c, d, args);
});
return G__12150;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__12144.call(this,f,a);
case  3 :
return apply__12145.call(this,f,a,b);
case  4 :
return apply__12146.call(this,f,a,b,c);
case  5 :
return apply__12147.call(this,f,a,b,c,d);
default:
return apply__12148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__12148.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__12152){
var obj = cljs.core.first(arglist__12152);
var f = cljs.core.first(cljs.core.next(arglist__12152));
var args = cljs.core.rest(cljs.core.next(arglist__12152));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___12153 = (function (x){
return false;
});
var not_EQ___12154 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___12155 = (function() { 
var G__12157__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__12157 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12157__delegate.call(this, x, y, more);
};
G__12157.cljs$lang$maxFixedArity = 2;
G__12157.cljs$lang$applyTo = (function (arglist__12158){
var x = cljs.core.first(arglist__12158);
var y = cljs.core.first(cljs.core.next(arglist__12158));
var more = cljs.core.rest(cljs.core.next(arglist__12158));
return G__12157__delegate.call(this, x, y, more);
});
return G__12157;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___12153.call(this,x);
case  2 :
return not_EQ___12154.call(this,x,y);
default:
return not_EQ___12155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___12155.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__12159 = pred;
var G__12160 = cljs.core.next.call(null,coll);
pred = G__12159;
coll = G__12160;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____12161 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____12161))
{return or__3576__auto____12161;
} else
{{
var G__12162 = pred;
var G__12163 = cljs.core.next.call(null,coll);
pred = G__12162;
coll = G__12163;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__12164 = null;
var G__12164__12165 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__12164__12166 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__12164__12167 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__12164__12168 = (function() { 
var G__12170__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__12170 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12170__delegate.call(this, x, y, zs);
};
G__12170.cljs$lang$maxFixedArity = 2;
G__12170.cljs$lang$applyTo = (function (arglist__12171){
var x = cljs.core.first(arglist__12171);
var y = cljs.core.first(cljs.core.next(arglist__12171));
var zs = cljs.core.rest(cljs.core.next(arglist__12171));
return G__12170__delegate.call(this, x, y, zs);
});
return G__12170;
})()
;
G__12164 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__12164__12165.call(this);
case  1 :
return G__12164__12166.call(this,x);
case  2 :
return G__12164__12167.call(this,x,y);
default:
return G__12164__12168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12164.cljs$lang$maxFixedArity = 2;
G__12164.cljs$lang$applyTo = G__12164__12168.cljs$lang$applyTo;
return G__12164;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__12172__delegate = function (args){
return x;
};
var G__12172 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12172__delegate.call(this, args);
};
G__12172.cljs$lang$maxFixedArity = 0;
G__12172.cljs$lang$applyTo = (function (arglist__12173){
var args = cljs.core.seq( arglist__12173 );;
return G__12172__delegate.call(this, args);
});
return G__12172;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__12177 = (function (){
return cljs.core.identity;
});
var comp__12178 = (function (f){
return f;
});
var comp__12179 = (function (f,g){
return (function() {
var G__12183 = null;
var G__12183__12184 = (function (){
return f.call(null,g.call(null));
});
var G__12183__12185 = (function (x){
return f.call(null,g.call(null,x));
});
var G__12183__12186 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__12183__12187 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__12183__12188 = (function() { 
var G__12190__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12190__delegate.call(this, x, y, z, args);
};
G__12190.cljs$lang$maxFixedArity = 3;
G__12190.cljs$lang$applyTo = (function (arglist__12191){
var x = cljs.core.first(arglist__12191);
var y = cljs.core.first(cljs.core.next(arglist__12191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12191)));
return G__12190__delegate.call(this, x, y, z, args);
});
return G__12190;
})()
;
G__12183 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12183__12184.call(this);
case  1 :
return G__12183__12185.call(this,x);
case  2 :
return G__12183__12186.call(this,x,y);
case  3 :
return G__12183__12187.call(this,x,y,z);
default:
return G__12183__12188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12183.cljs$lang$maxFixedArity = 3;
G__12183.cljs$lang$applyTo = G__12183__12188.cljs$lang$applyTo;
return G__12183;
})()
});
var comp__12180 = (function (f,g,h){
return (function() {
var G__12192 = null;
var G__12192__12193 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__12192__12194 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__12192__12195 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__12192__12196 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__12192__12197 = (function() { 
var G__12199__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__12199 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12199__delegate.call(this, x, y, z, args);
};
G__12199.cljs$lang$maxFixedArity = 3;
G__12199.cljs$lang$applyTo = (function (arglist__12200){
var x = cljs.core.first(arglist__12200);
var y = cljs.core.first(cljs.core.next(arglist__12200));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12200)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12200)));
return G__12199__delegate.call(this, x, y, z, args);
});
return G__12199;
})()
;
G__12192 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12192__12193.call(this);
case  1 :
return G__12192__12194.call(this,x);
case  2 :
return G__12192__12195.call(this,x,y);
case  3 :
return G__12192__12196.call(this,x,y,z);
default:
return G__12192__12197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12192.cljs$lang$maxFixedArity = 3;
G__12192.cljs$lang$applyTo = G__12192__12197.cljs$lang$applyTo;
return G__12192;
})()
});
var comp__12181 = (function() { 
var G__12201__delegate = function (f1,f2,f3,fs){
var fs__12174 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__12202__delegate = function (args){
var ret__12175 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__12174),args);
var fs__12176 = cljs.core.next.call(null,fs__12174);

while(true){
if(cljs.core.truth_(fs__12176))
{{
var G__12203 = cljs.core.first.call(null,fs__12176).call(null,ret__12175);
var G__12204 = cljs.core.next.call(null,fs__12176);
ret__12175 = G__12203;
fs__12176 = G__12204;
continue;
}
} else
{return ret__12175;
}
break;
}
};
var G__12202 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12202__delegate.call(this, args);
};
G__12202.cljs$lang$maxFixedArity = 0;
G__12202.cljs$lang$applyTo = (function (arglist__12205){
var args = cljs.core.seq( arglist__12205 );;
return G__12202__delegate.call(this, args);
});
return G__12202;
})()
;
};
var G__12201 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12201__delegate.call(this, f1, f2, f3, fs);
};
G__12201.cljs$lang$maxFixedArity = 3;
G__12201.cljs$lang$applyTo = (function (arglist__12206){
var f1 = cljs.core.first(arglist__12206);
var f2 = cljs.core.first(cljs.core.next(arglist__12206));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12206)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12206)));
return G__12201__delegate.call(this, f1, f2, f3, fs);
});
return G__12201;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__12177.call(this);
case  1 :
return comp__12178.call(this,f1);
case  2 :
return comp__12179.call(this,f1,f2);
case  3 :
return comp__12180.call(this,f1,f2,f3);
default:
return comp__12181.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__12181.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__12207 = (function (f,arg1){
return (function() { 
var G__12212__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__12212 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12212__delegate.call(this, args);
};
G__12212.cljs$lang$maxFixedArity = 0;
G__12212.cljs$lang$applyTo = (function (arglist__12213){
var args = cljs.core.seq( arglist__12213 );;
return G__12212__delegate.call(this, args);
});
return G__12212;
})()
;
});
var partial__12208 = (function (f,arg1,arg2){
return (function() { 
var G__12214__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__12214 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12214__delegate.call(this, args);
};
G__12214.cljs$lang$maxFixedArity = 0;
G__12214.cljs$lang$applyTo = (function (arglist__12215){
var args = cljs.core.seq( arglist__12215 );;
return G__12214__delegate.call(this, args);
});
return G__12214;
})()
;
});
var partial__12209 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__12216__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__12216 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12216__delegate.call(this, args);
};
G__12216.cljs$lang$maxFixedArity = 0;
G__12216.cljs$lang$applyTo = (function (arglist__12217){
var args = cljs.core.seq( arglist__12217 );;
return G__12216__delegate.call(this, args);
});
return G__12216;
})()
;
});
var partial__12210 = (function() { 
var G__12218__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__12219__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__12219 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12219__delegate.call(this, args);
};
G__12219.cljs$lang$maxFixedArity = 0;
G__12219.cljs$lang$applyTo = (function (arglist__12220){
var args = cljs.core.seq( arglist__12220 );;
return G__12219__delegate.call(this, args);
});
return G__12219;
})()
;
};
var G__12218 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12218__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__12218.cljs$lang$maxFixedArity = 4;
G__12218.cljs$lang$applyTo = (function (arglist__12221){
var f = cljs.core.first(arglist__12221);
var arg1 = cljs.core.first(cljs.core.next(arglist__12221));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12221)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12221))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12221))));
return G__12218__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__12218;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__12207.call(this,f,arg1);
case  3 :
return partial__12208.call(this,f,arg1,arg2);
case  4 :
return partial__12209.call(this,f,arg1,arg2,arg3);
default:
return partial__12210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__12210.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__12222 = (function (f,x){
return (function() {
var G__12226 = null;
var G__12226__12227 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__12226__12228 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__12226__12229 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__12226__12230 = (function() { 
var G__12232__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__12232 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12232__delegate.call(this, a, b, c, ds);
};
G__12232.cljs$lang$maxFixedArity = 3;
G__12232.cljs$lang$applyTo = (function (arglist__12233){
var a = cljs.core.first(arglist__12233);
var b = cljs.core.first(cljs.core.next(arglist__12233));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12233)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12233)));
return G__12232__delegate.call(this, a, b, c, ds);
});
return G__12232;
})()
;
G__12226 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__12226__12227.call(this,a);
case  2 :
return G__12226__12228.call(this,a,b);
case  3 :
return G__12226__12229.call(this,a,b,c);
default:
return G__12226__12230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12226.cljs$lang$maxFixedArity = 3;
G__12226.cljs$lang$applyTo = G__12226__12230.cljs$lang$applyTo;
return G__12226;
})()
});
var fnil__12223 = (function (f,x,y){
return (function() {
var G__12234 = null;
var G__12234__12235 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__12234__12236 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__12234__12237 = (function() { 
var G__12239__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__12239 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12239__delegate.call(this, a, b, c, ds);
};
G__12239.cljs$lang$maxFixedArity = 3;
G__12239.cljs$lang$applyTo = (function (arglist__12240){
var a = cljs.core.first(arglist__12240);
var b = cljs.core.first(cljs.core.next(arglist__12240));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12240)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12240)));
return G__12239__delegate.call(this, a, b, c, ds);
});
return G__12239;
})()
;
G__12234 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12234__12235.call(this,a,b);
case  3 :
return G__12234__12236.call(this,a,b,c);
default:
return G__12234__12237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12234.cljs$lang$maxFixedArity = 3;
G__12234.cljs$lang$applyTo = G__12234__12237.cljs$lang$applyTo;
return G__12234;
})()
});
var fnil__12224 = (function (f,x,y,z){
return (function() {
var G__12241 = null;
var G__12241__12242 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__12241__12243 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__12241__12244 = (function() { 
var G__12246__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__12246 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12246__delegate.call(this, a, b, c, ds);
};
G__12246.cljs$lang$maxFixedArity = 3;
G__12246.cljs$lang$applyTo = (function (arglist__12247){
var a = cljs.core.first(arglist__12247);
var b = cljs.core.first(cljs.core.next(arglist__12247));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12247)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12247)));
return G__12246__delegate.call(this, a, b, c, ds);
});
return G__12246;
})()
;
G__12241 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__12241__12242.call(this,a,b);
case  3 :
return G__12241__12243.call(this,a,b,c);
default:
return G__12241__12244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12241.cljs$lang$maxFixedArity = 3;
G__12241.cljs$lang$applyTo = G__12241__12244.cljs$lang$applyTo;
return G__12241;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__12222.call(this,f,x);
case  3 :
return fnil__12223.call(this,f,x,y);
case  4 :
return fnil__12224.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__12250 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12248 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12248))
{var s__12249 = temp__3726__auto____12248;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__12249)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__12249)));
} else
{return null;
}
})));
});

return mapi__12250.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12251 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12251))
{var s__12252 = temp__3726__auto____12251;

var x__12253 = f.call(null,cljs.core.first.call(null,s__12252));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__12253)))
{return keep.call(null,f,cljs.core.rest.call(null,s__12252));
} else
{return cljs.core.cons.call(null,x__12253,keep.call(null,f,cljs.core.rest.call(null,s__12252)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__12263 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12260 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12260))
{var s__12261 = temp__3726__auto____12260;

var x__12262 = f.call(null,idx,cljs.core.first.call(null,s__12261));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__12262)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__12261));
} else
{return cljs.core.cons.call(null,x__12262,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__12261)));
}
} else
{return null;
}
})));
});

return keepi__12263.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__12308 = (function (p){
return (function() {
var ep1 = null;
var ep1__12313 = (function (){
return true;
});
var ep1__12314 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__12315 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12270 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____12270))
{return p.call(null,y);
} else
{return and__3574__auto____12270;
}
})());
});
var ep1__12316 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12271 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____12271))
{var and__3574__auto____12272 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____12272))
{return p.call(null,z);
} else
{return and__3574__auto____12272;
}
} else
{return and__3574__auto____12271;
}
})());
});
var ep1__12317 = (function() { 
var G__12319__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12273 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12273))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____12273;
}
})());
};
var G__12319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12319__delegate.call(this, x, y, z, args);
};
G__12319.cljs$lang$maxFixedArity = 3;
G__12319.cljs$lang$applyTo = (function (arglist__12320){
var x = cljs.core.first(arglist__12320);
var y = cljs.core.first(cljs.core.next(arglist__12320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12320)));
return G__12319__delegate.call(this, x, y, z, args);
});
return G__12319;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__12313.call(this);
case  1 :
return ep1__12314.call(this,x);
case  2 :
return ep1__12315.call(this,x,y);
case  3 :
return ep1__12316.call(this,x,y,z);
default:
return ep1__12317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__12317.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__12309 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__12321 = (function (){
return true;
});
var ep2__12322 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12274 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12274))
{return p2.call(null,x);
} else
{return and__3574__auto____12274;
}
})());
});
var ep2__12323 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12275 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12275))
{var and__3574__auto____12276 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12276))
{var and__3574__auto____12277 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12277))
{return p2.call(null,y);
} else
{return and__3574__auto____12277;
}
} else
{return and__3574__auto____12276;
}
} else
{return and__3574__auto____12275;
}
})());
});
var ep2__12324 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12278 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12278))
{var and__3574__auto____12279 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12279))
{var and__3574__auto____12280 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____12280))
{var and__3574__auto____12281 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12281))
{var and__3574__auto____12282 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____12282))
{return p2.call(null,z);
} else
{return and__3574__auto____12282;
}
} else
{return and__3574__auto____12281;
}
} else
{return and__3574__auto____12280;
}
} else
{return and__3574__auto____12279;
}
} else
{return and__3574__auto____12278;
}
})());
});
var ep2__12325 = (function() { 
var G__12327__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12283 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12283))
{return cljs.core.every_QMARK_.call(null,(function (p1__12254_SHARP_){
var and__3574__auto____12284 = p1.call(null,p1__12254_SHARP_);

if(cljs.core.truth_(and__3574__auto____12284))
{return p2.call(null,p1__12254_SHARP_);
} else
{return and__3574__auto____12284;
}
}),args);
} else
{return and__3574__auto____12283;
}
})());
};
var G__12327 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12327__delegate.call(this, x, y, z, args);
};
G__12327.cljs$lang$maxFixedArity = 3;
G__12327.cljs$lang$applyTo = (function (arglist__12328){
var x = cljs.core.first(arglist__12328);
var y = cljs.core.first(cljs.core.next(arglist__12328));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12328)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12328)));
return G__12327__delegate.call(this, x, y, z, args);
});
return G__12327;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__12321.call(this);
case  1 :
return ep2__12322.call(this,x);
case  2 :
return ep2__12323.call(this,x,y);
case  3 :
return ep2__12324.call(this,x,y,z);
default:
return ep2__12325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__12325.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__12310 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__12329 = (function (){
return true;
});
var ep3__12330 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12285 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12285))
{var and__3574__auto____12286 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12286))
{return p3.call(null,x);
} else
{return and__3574__auto____12286;
}
} else
{return and__3574__auto____12285;
}
})());
});
var ep3__12331 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12287 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12287))
{var and__3574__auto____12288 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12288))
{var and__3574__auto____12289 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____12289))
{var and__3574__auto____12290 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12290))
{var and__3574__auto____12291 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____12291))
{return p3.call(null,y);
} else
{return and__3574__auto____12291;
}
} else
{return and__3574__auto____12290;
}
} else
{return and__3574__auto____12289;
}
} else
{return and__3574__auto____12288;
}
} else
{return and__3574__auto____12287;
}
})());
});
var ep3__12332 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12292 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____12292))
{var and__3574__auto____12293 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____12293))
{var and__3574__auto____12294 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____12294))
{var and__3574__auto____12295 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____12295))
{var and__3574__auto____12296 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____12296))
{var and__3574__auto____12297 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____12297))
{var and__3574__auto____12298 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____12298))
{var and__3574__auto____12299 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____12299))
{return p3.call(null,z);
} else
{return and__3574__auto____12299;
}
} else
{return and__3574__auto____12298;
}
} else
{return and__3574__auto____12297;
}
} else
{return and__3574__auto____12296;
}
} else
{return and__3574__auto____12295;
}
} else
{return and__3574__auto____12294;
}
} else
{return and__3574__auto____12293;
}
} else
{return and__3574__auto____12292;
}
})());
});
var ep3__12333 = (function() { 
var G__12335__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12300 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12300))
{return cljs.core.every_QMARK_.call(null,(function (p1__12255_SHARP_){
var and__3574__auto____12301 = p1.call(null,p1__12255_SHARP_);

if(cljs.core.truth_(and__3574__auto____12301))
{var and__3574__auto____12302 = p2.call(null,p1__12255_SHARP_);

if(cljs.core.truth_(and__3574__auto____12302))
{return p3.call(null,p1__12255_SHARP_);
} else
{return and__3574__auto____12302;
}
} else
{return and__3574__auto____12301;
}
}),args);
} else
{return and__3574__auto____12300;
}
})());
};
var G__12335 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12335__delegate.call(this, x, y, z, args);
};
G__12335.cljs$lang$maxFixedArity = 3;
G__12335.cljs$lang$applyTo = (function (arglist__12336){
var x = cljs.core.first(arglist__12336);
var y = cljs.core.first(cljs.core.next(arglist__12336));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12336)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12336)));
return G__12335__delegate.call(this, x, y, z, args);
});
return G__12335;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__12329.call(this);
case  1 :
return ep3__12330.call(this,x);
case  2 :
return ep3__12331.call(this,x,y);
case  3 :
return ep3__12332.call(this,x,y,z);
default:
return ep3__12333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__12333.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__12311 = (function() { 
var G__12337__delegate = function (p1,p2,p3,ps){
var ps__12303 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__12338 = (function (){
return true;
});
var epn__12339 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__12256_SHARP_){
return p1__12256_SHARP_.call(null,x);
}),ps__12303);
});
var epn__12340 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__12257_SHARP_){
var and__3574__auto____12304 = p1__12257_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____12304))
{return p1__12257_SHARP_.call(null,y);
} else
{return and__3574__auto____12304;
}
}),ps__12303);
});
var epn__12341 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__12258_SHARP_){
var and__3574__auto____12305 = p1__12258_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____12305))
{var and__3574__auto____12306 = p1__12258_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____12306))
{return p1__12258_SHARP_.call(null,z);
} else
{return and__3574__auto____12306;
}
} else
{return and__3574__auto____12305;
}
}),ps__12303);
});
var epn__12342 = (function() { 
var G__12344__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____12307 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____12307))
{return cljs.core.every_QMARK_.call(null,(function (p1__12259_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__12259_SHARP_,args);
}),ps__12303);
} else
{return and__3574__auto____12307;
}
})());
};
var G__12344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12344__delegate.call(this, x, y, z, args);
};
G__12344.cljs$lang$maxFixedArity = 3;
G__12344.cljs$lang$applyTo = (function (arglist__12345){
var x = cljs.core.first(arglist__12345);
var y = cljs.core.first(cljs.core.next(arglist__12345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12345)));
return G__12344__delegate.call(this, x, y, z, args);
});
return G__12344;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__12338.call(this);
case  1 :
return epn__12339.call(this,x);
case  2 :
return epn__12340.call(this,x,y);
case  3 :
return epn__12341.call(this,x,y,z);
default:
return epn__12342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__12342.cljs$lang$applyTo;
return epn;
})()
};
var G__12337 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12337__delegate.call(this, p1, p2, p3, ps);
};
G__12337.cljs$lang$maxFixedArity = 3;
G__12337.cljs$lang$applyTo = (function (arglist__12346){
var p1 = cljs.core.first(arglist__12346);
var p2 = cljs.core.first(cljs.core.next(arglist__12346));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12346)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12346)));
return G__12337__delegate.call(this, p1, p2, p3, ps);
});
return G__12337;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__12308.call(this,p1);
case  2 :
return every_pred__12309.call(this,p1,p2);
case  3 :
return every_pred__12310.call(this,p1,p2,p3);
default:
return every_pred__12311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__12311.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__12386 = (function (p){
return (function() {
var sp1 = null;
var sp1__12391 = (function (){
return null;
});
var sp1__12392 = (function (x){
return p.call(null,x);
});
var sp1__12393 = (function (x,y){
var or__3576__auto____12348 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____12348))
{return or__3576__auto____12348;
} else
{return p.call(null,y);
}
});
var sp1__12394 = (function (x,y,z){
var or__3576__auto____12349 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____12349))
{return or__3576__auto____12349;
} else
{var or__3576__auto____12350 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____12350))
{return or__3576__auto____12350;
} else
{return p.call(null,z);
}
}
});
var sp1__12395 = (function() { 
var G__12397__delegate = function (x,y,z,args){
var or__3576__auto____12351 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12351))
{return or__3576__auto____12351;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12397 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12397__delegate.call(this, x, y, z, args);
};
G__12397.cljs$lang$maxFixedArity = 3;
G__12397.cljs$lang$applyTo = (function (arglist__12398){
var x = cljs.core.first(arglist__12398);
var y = cljs.core.first(cljs.core.next(arglist__12398));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12398)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12398)));
return G__12397__delegate.call(this, x, y, z, args);
});
return G__12397;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__12391.call(this);
case  1 :
return sp1__12392.call(this,x);
case  2 :
return sp1__12393.call(this,x,y);
case  3 :
return sp1__12394.call(this,x,y,z);
default:
return sp1__12395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__12395.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__12387 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12399 = (function (){
return null;
});
var sp2__12400 = (function (x){
var or__3576__auto____12352 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12352))
{return or__3576__auto____12352;
} else
{return p2.call(null,x);
}
});
var sp2__12401 = (function (x,y){
var or__3576__auto____12353 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12353))
{return or__3576__auto____12353;
} else
{var or__3576__auto____12354 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12354))
{return or__3576__auto____12354;
} else
{var or__3576__auto____12355 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12355))
{return or__3576__auto____12355;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12402 = (function (x,y,z){
var or__3576__auto____12356 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12356))
{return or__3576__auto____12356;
} else
{var or__3576__auto____12357 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12357))
{return or__3576__auto____12357;
} else
{var or__3576__auto____12358 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____12358))
{return or__3576__auto____12358;
} else
{var or__3576__auto____12359 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12359))
{return or__3576__auto____12359;
} else
{var or__3576__auto____12360 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____12360))
{return or__3576__auto____12360;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12403 = (function() { 
var G__12405__delegate = function (x,y,z,args){
var or__3576__auto____12361 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12361))
{return or__3576__auto____12361;
} else
{return cljs.core.some.call(null,(function (p1__12264_SHARP_){
var or__3576__auto____12362 = p1.call(null,p1__12264_SHARP_);

if(cljs.core.truth_(or__3576__auto____12362))
{return or__3576__auto____12362;
} else
{return p2.call(null,p1__12264_SHARP_);
}
}),args);
}
};
var G__12405 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12405__delegate.call(this, x, y, z, args);
};
G__12405.cljs$lang$maxFixedArity = 3;
G__12405.cljs$lang$applyTo = (function (arglist__12406){
var x = cljs.core.first(arglist__12406);
var y = cljs.core.first(cljs.core.next(arglist__12406));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12406)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12406)));
return G__12405__delegate.call(this, x, y, z, args);
});
return G__12405;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12399.call(this);
case  1 :
return sp2__12400.call(this,x);
case  2 :
return sp2__12401.call(this,x,y);
case  3 :
return sp2__12402.call(this,x,y,z);
default:
return sp2__12403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12403.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__12388 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12407 = (function (){
return null;
});
var sp3__12408 = (function (x){
var or__3576__auto____12363 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12363))
{return or__3576__auto____12363;
} else
{var or__3576__auto____12364 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12364))
{return or__3576__auto____12364;
} else
{return p3.call(null,x);
}
}
});
var sp3__12409 = (function (x,y){
var or__3576__auto____12365 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12365))
{return or__3576__auto____12365;
} else
{var or__3576__auto____12366 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12366))
{return or__3576__auto____12366;
} else
{var or__3576__auto____12367 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____12367))
{return or__3576__auto____12367;
} else
{var or__3576__auto____12368 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12368))
{return or__3576__auto____12368;
} else
{var or__3576__auto____12369 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____12369))
{return or__3576__auto____12369;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12410 = (function (x,y,z){
var or__3576__auto____12370 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____12370))
{return or__3576__auto____12370;
} else
{var or__3576__auto____12371 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____12371))
{return or__3576__auto____12371;
} else
{var or__3576__auto____12372 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____12372))
{return or__3576__auto____12372;
} else
{var or__3576__auto____12373 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____12373))
{return or__3576__auto____12373;
} else
{var or__3576__auto____12374 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____12374))
{return or__3576__auto____12374;
} else
{var or__3576__auto____12375 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____12375))
{return or__3576__auto____12375;
} else
{var or__3576__auto____12376 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____12376))
{return or__3576__auto____12376;
} else
{var or__3576__auto____12377 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____12377))
{return or__3576__auto____12377;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__12411 = (function() { 
var G__12413__delegate = function (x,y,z,args){
var or__3576__auto____12378 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12378))
{return or__3576__auto____12378;
} else
{return cljs.core.some.call(null,(function (p1__12265_SHARP_){
var or__3576__auto____12379 = p1.call(null,p1__12265_SHARP_);

if(cljs.core.truth_(or__3576__auto____12379))
{return or__3576__auto____12379;
} else
{var or__3576__auto____12380 = p2.call(null,p1__12265_SHARP_);

if(cljs.core.truth_(or__3576__auto____12380))
{return or__3576__auto____12380;
} else
{return p3.call(null,p1__12265_SHARP_);
}
}
}),args);
}
};
var G__12413 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12413__delegate.call(this, x, y, z, args);
};
G__12413.cljs$lang$maxFixedArity = 3;
G__12413.cljs$lang$applyTo = (function (arglist__12414){
var x = cljs.core.first(arglist__12414);
var y = cljs.core.first(cljs.core.next(arglist__12414));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12414)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12414)));
return G__12413__delegate.call(this, x, y, z, args);
});
return G__12413;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12407.call(this);
case  1 :
return sp3__12408.call(this,x);
case  2 :
return sp3__12409.call(this,x,y);
case  3 :
return sp3__12410.call(this,x,y,z);
default:
return sp3__12411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12411.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__12389 = (function() { 
var G__12415__delegate = function (p1,p2,p3,ps){
var ps__12381 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12416 = (function (){
return null;
});
var spn__12417 = (function (x){
return cljs.core.some.call(null,(function (p1__12266_SHARP_){
return p1__12266_SHARP_.call(null,x);
}),ps__12381);
});
var spn__12418 = (function (x,y){
return cljs.core.some.call(null,(function (p1__12267_SHARP_){
var or__3576__auto____12382 = p1__12267_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____12382))
{return or__3576__auto____12382;
} else
{return p1__12267_SHARP_.call(null,y);
}
}),ps__12381);
});
var spn__12419 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__12268_SHARP_){
var or__3576__auto____12383 = p1__12268_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____12383))
{return or__3576__auto____12383;
} else
{var or__3576__auto____12384 = p1__12268_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____12384))
{return or__3576__auto____12384;
} else
{return p1__12268_SHARP_.call(null,z);
}
}
}),ps__12381);
});
var spn__12420 = (function() { 
var G__12422__delegate = function (x,y,z,args){
var or__3576__auto____12385 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____12385))
{return or__3576__auto____12385;
} else
{return cljs.core.some.call(null,(function (p1__12269_SHARP_){
return cljs.core.some.call(null,p1__12269_SHARP_,args);
}),ps__12381);
}
};
var G__12422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12422__delegate.call(this, x, y, z, args);
};
G__12422.cljs$lang$maxFixedArity = 3;
G__12422.cljs$lang$applyTo = (function (arglist__12423){
var x = cljs.core.first(arglist__12423);
var y = cljs.core.first(cljs.core.next(arglist__12423));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12423)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12423)));
return G__12422__delegate.call(this, x, y, z, args);
});
return G__12422;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12416.call(this);
case  1 :
return spn__12417.call(this,x);
case  2 :
return spn__12418.call(this,x,y);
case  3 :
return spn__12419.call(this,x,y,z);
default:
return spn__12420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12420.cljs$lang$applyTo;
return spn;
})()
};
var G__12415 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12415__delegate.call(this, p1, p2, p3, ps);
};
G__12415.cljs$lang$maxFixedArity = 3;
G__12415.cljs$lang$applyTo = (function (arglist__12424){
var p1 = cljs.core.first(arglist__12424);
var p2 = cljs.core.first(cljs.core.next(arglist__12424));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12424)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12424)));
return G__12415__delegate.call(this, p1, p2, p3, ps);
});
return G__12415;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__12386.call(this,p1);
case  2 :
return some_fn__12387.call(this,p1,p2);
case  3 :
return some_fn__12388.call(this,p1,p2,p3);
default:
return some_fn__12389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__12389.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__12437 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12425 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12425))
{var s__12426 = temp__3726__auto____12425;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12426)),map.call(null,f,cljs.core.rest.call(null,s__12426)));
} else
{return null;
}
})));
});
var map__12438 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12427 = cljs.core.seq.call(null,c1);
var s2__12428 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____12429 = s1__12427;

if(cljs.core.truth_(and__3574__auto____12429))
{return s2__12428;
} else
{return and__3574__auto____12429;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12427),cljs.core.first.call(null,s2__12428)),map.call(null,f,cljs.core.rest.call(null,s1__12427),cljs.core.rest.call(null,s2__12428)));
} else
{return null;
}
})));
});
var map__12439 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12430 = cljs.core.seq.call(null,c1);
var s2__12431 = cljs.core.seq.call(null,c2);
var s3__12432 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____12433 = s1__12430;

if(cljs.core.truth_(and__3574__auto____12433))
{var and__3574__auto____12434 = s2__12431;

if(cljs.core.truth_(and__3574__auto____12434))
{return s3__12432;
} else
{return and__3574__auto____12434;
}
} else
{return and__3574__auto____12433;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12430),cljs.core.first.call(null,s2__12431),cljs.core.first.call(null,s3__12432)),map.call(null,f,cljs.core.rest.call(null,s1__12430),cljs.core.rest.call(null,s2__12431),cljs.core.rest.call(null,s3__12432)));
} else
{return null;
}
})));
});
var map__12440 = (function() { 
var G__12442__delegate = function (f,c1,c2,c3,colls){
var step__12436 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12435 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12435)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12435),step.call(null,map.call(null,cljs.core.rest,ss__12435)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__12347_SHARP_){
return cljs.core.apply.call(null,f,p1__12347_SHARP_);
}),step__12436.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12442 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12442__delegate.call(this, f, c1, c2, c3, colls);
};
G__12442.cljs$lang$maxFixedArity = 4;
G__12442.cljs$lang$applyTo = (function (arglist__12443){
var f = cljs.core.first(arglist__12443);
var c1 = cljs.core.first(cljs.core.next(arglist__12443));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12443)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12443))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12443))));
return G__12442__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12442;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12437.call(this,f,c1);
case  3 :
return map__12438.call(this,f,c1,c2);
case  4 :
return map__12439.call(this,f,c1,c2,c3);
default:
return map__12440.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12440.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____12444 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12444))
{var s__12445 = temp__3726__auto____12444;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12445),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__12445)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__12448 = (function (n,coll){
while(true){
var s__12446 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____12447 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____12447))
{return s__12446;
} else
{return and__3574__auto____12447;
}
})()))
{{
var G__12449 = cljs.core.dec.call(null,n);
var G__12450 = cljs.core.rest.call(null,s__12446);
n = G__12449;
coll = G__12450;
continue;
}
} else
{return s__12446;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12448.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12451 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12452 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12451.call(this,n);
case  2 :
return drop_last__12452.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__12454 = cljs.core.seq.call(null,coll);
var lead__12455 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12455))
{{
var G__12456 = cljs.core.next.call(null,s__12454);
var G__12457 = cljs.core.next.call(null,lead__12455);
s__12454 = G__12456;
lead__12455 = G__12457;
continue;
}
} else
{return s__12454;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12460 = (function (pred,coll){
while(true){
var s__12458 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____12459 = s__12458;

if(cljs.core.truth_(and__3574__auto____12459))
{return pred.call(null,cljs.core.first.call(null,s__12458));
} else
{return and__3574__auto____12459;
}
})()))
{{
var G__12461 = pred;
var G__12462 = cljs.core.rest.call(null,s__12458);
pred = G__12461;
coll = G__12462;
continue;
}
} else
{return s__12458;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12460.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12463 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12463))
{var s__12464 = temp__3726__auto____12463;

return cljs.core.concat.call(null,s__12464,cycle.call(null,s__12464));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__12465 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12466 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12465.call(this,n);
case  2 :
return repeat__12466.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__12468 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12469 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12468.call(this,n);
case  2 :
return repeatedly__12469.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__12475 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12471 = cljs.core.seq.call(null,c1);
var s2__12472 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____12473 = s1__12471;

if(cljs.core.truth_(and__3574__auto____12473))
{return s2__12472;
} else
{return and__3574__auto____12473;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12471),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12472),interleave.call(null,cljs.core.rest.call(null,s1__12471),cljs.core.rest.call(null,s2__12472))));
} else
{return null;
}
})));
});
var interleave__12476 = (function() { 
var G__12478__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12474 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12474)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12474),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12474)));
} else
{return null;
}
})));
};
var G__12478 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12478__delegate.call(this, c1, c2, colls);
};
G__12478.cljs$lang$maxFixedArity = 2;
G__12478.cljs$lang$applyTo = (function (arglist__12479){
var c1 = cljs.core.first(arglist__12479);
var c2 = cljs.core.first(cljs.core.next(arglist__12479));
var colls = cljs.core.rest(cljs.core.next(arglist__12479));
return G__12478__delegate.call(this, c1, c2, colls);
});
return G__12478;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12475.call(this,c1,c2);
default:
return interleave__12476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12476.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12482 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____12480 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____12480))
{var coll__12481 = temp__3723__auto____12480;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12481),cat.call(null,cljs.core.rest.call(null,coll__12481),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12482.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12483 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12484 = (function() { 
var G__12486__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12486 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12486__delegate.call(this, f, coll, colls);
};
G__12486.cljs$lang$maxFixedArity = 2;
G__12486.cljs$lang$applyTo = (function (arglist__12487){
var f = cljs.core.first(arglist__12487);
var coll = cljs.core.first(cljs.core.next(arglist__12487));
var colls = cljs.core.rest(cljs.core.next(arglist__12487));
return G__12486__delegate.call(this, f, coll, colls);
});
return G__12486;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12483.call(this,f,coll);
default:
return mapcat__12484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12484.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12488 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12488))
{var s__12489 = temp__3726__auto____12488;

var f__12490 = cljs.core.first.call(null,s__12489);
var r__12491 = cljs.core.rest.call(null,s__12489);

if(cljs.core.truth_(pred.call(null,f__12490)))
{return cljs.core.cons.call(null,f__12490,filter.call(null,pred,r__12491));
} else
{return filter.call(null,pred,r__12491);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12493 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12493.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12492_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12492_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__12500 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12501 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12494))
{var s__12495 = temp__3726__auto____12494;

var p__12496 = cljs.core.take.call(null,n,s__12495);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12496))))
{return cljs.core.cons.call(null,p__12496,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12495)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12502 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12497 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12497))
{var s__12498 = temp__3726__auto____12497;

var p__12499 = cljs.core.take.call(null,n,s__12498);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12499))))
{return cljs.core.cons.call(null,p__12499,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12498)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12499,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12500.call(this,n,step);
case  3 :
return partition__12501.call(this,n,step,pad);
case  4 :
return partition__12502.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__12508 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12509 = (function (m,ks,not_found){
var sentinel__12504 = cljs.core.lookup_sentinel;
var m__12505 = m;
var ks__12506 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12506))
{var m__12507 = cljs.core.get.call(null,m__12505,cljs.core.first.call(null,ks__12506),sentinel__12504);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__12504,m__12507)))
{return not_found;
} else
{{
var G__12511 = sentinel__12504;
var G__12512 = m__12507;
var G__12513 = cljs.core.next.call(null,ks__12506);
sentinel__12504 = G__12511;
m__12505 = G__12512;
ks__12506 = G__12513;
continue;
}
}
} else
{return m__12505;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12508.call(this,m,ks);
case  3 :
return get_in__12509.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12514,v){
var vec__12515__12516 = p__12514;
var k__12517 = cljs.core.nth.call(null,vec__12515__12516,0,null);
var ks__12518 = cljs.core.nthnext.call(null,vec__12515__12516,1);

if(cljs.core.truth_(ks__12518))
{return cljs.core.assoc.call(null,m,k__12517,assoc_in.call(null,cljs.core.get.call(null,m,k__12517),ks__12518,v));
} else
{return cljs.core.assoc.call(null,m,k__12517,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12519,f,args){
var vec__12520__12521 = p__12519;
var k__12522 = cljs.core.nth.call(null,vec__12520__12521,0,null);
var ks__12523 = cljs.core.nthnext.call(null,vec__12520__12521,1);

if(cljs.core.truth_(ks__12523))
{return cljs.core.assoc.call(null,m,k__12522,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12522),ks__12523,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12522,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12522),args));
}
};
var update_in = function (m,p__12519,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12519, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12524){
var m = cljs.core.first(arglist__12524);
var p__12519 = cljs.core.first(cljs.core.next(arglist__12524));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12524)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12524)));
return update_in__delegate.call(this, m, p__12519, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12525 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12526 = this;
var new_array__12527 = cljs.core.aclone.call(null,this__12526.array);

new_array__12527.push(o);
return (new cljs.core.Vector(this__12526.meta,new_array__12527));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12528 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__12528.array.length,0)))
{var vector_seq__12529 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__12528.array.length)))
{return cljs.core.cons.call(null,(this__12528.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__12529.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12530 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12531 = this;
var count__12532 = this__12531.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__12532,0)))
{return (this__12531.array[cljs.core.dec.call(null,count__12532)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12533 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__12533.array.length,0)))
{var new_array__12534 = cljs.core.aclone.call(null,this__12533.array);

new_array__12534.pop();
return (new cljs.core.Vector(this__12533.meta,new_array__12534));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12535 = this;
return (new cljs.core.Vector(meta,this__12535.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12536 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12536.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12550 = null;
var G__12550__12551 = (function (coll,n){
var this__12537 = this;
if(cljs.core.truth_((function (){var and__3574__auto____12538 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____12538))
{return cljs.core._LT_.call(null,n,this__12537.array.length);
} else
{return and__3574__auto____12538;
}
})()))
{return (this__12537.array[n]);
} else
{return null;
}
});
var G__12550__12552 = (function (coll,n,not_found){
var this__12539 = this;
if(cljs.core.truth_((function (){var and__3574__auto____12540 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____12540))
{return cljs.core._LT_.call(null,n,this__12539.array.length);
} else
{return and__3574__auto____12540;
}
})()))
{return (this__12539.array[n]);
} else
{return not_found;
}
});
G__12550 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12550__12551.call(this,coll,n);
case  3 :
return G__12550__12552.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12550;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12541 = this;
return this__12541.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12554 = null;
var G__12554__12555 = (function (v,f){
var this__12542 = this;
return cljs.core.ci_reduce.call(null,this__12542.array,f);
});
var G__12554__12556 = (function (v,f,start){
var this__12543 = this;
return cljs.core.ci_reduce.call(null,this__12543.array,f,start);
});
G__12554 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12554__12555.call(this,v,f);
case  3 :
return G__12554__12556.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12554;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12544 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12545 = this;
return this__12545.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12546 = this;
var new_array__12547 = cljs.core.aclone.call(null,this__12546.array);

(new_array__12547[k] = v);
return (new cljs.core.Vector(this__12546.meta,new_array__12547));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12558 = null;
var G__12558__12559 = (function (coll,k){
var this__12548 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12558__12560 = (function (coll,k,not_found){
var this__12549 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12558 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12558__12559.call(this,coll,k);
case  3 :
return G__12558__12560.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12558;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__12562 = null;
var G__12562__12563 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__12562__12564 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__12562 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__12562__12563.call(this,_,k);
case  3 :
return G__12562__12564.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12562;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12566){
var args = cljs.core.seq( arglist__12566 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12567 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12568 = array.length;

var i__12569 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__12569,len__12568)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12569]))))
{return i__12569;
} else
{{
var G__12570 = cljs.core._PLUS_.call(null,i__12569,incr);
i__12569 = G__12570;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___12572 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12573 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____12571 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____12571))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____12571;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___12572.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12573.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12576 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12577 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12578 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__12578.keys.length)))
{return cljs.core.map.call(null,(function (p1__12575_SHARP_){
return cljs.core.vector.call(null,p1__12575_SHARP_,(this__12578.strobj[p1__12575_SHARP_]));
}),this__12578.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12579 = this;
return (new cljs.core.ObjMap(meta,this__12579.keys,this__12579.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12580 = this;
if(cljs.core.truth_((function (){var and__3574__auto____12581 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____12581))
{return this__12580.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____12581;
}
})()))
{var new_keys__12582 = cljs.core.aclone.call(null,this__12580.keys);
var new_strobj__12583 = goog.object.clone.call(null,this__12580.strobj);

new_keys__12582.splice(cljs.core.scan_array.call(null,1,k,new_keys__12582),1);
cljs.core.js_delete.call(null,new_strobj__12583,k);
return (new cljs.core.ObjMap(this__12580.meta,new_keys__12582,new_strobj__12583));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12584 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12584.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12585 = this;
return this__12585.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12586 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12587 = this;
return this__12587.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12588 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12589 = goog.object.clone.call(null,this__12588.strobj);
var overwrite_QMARK___12590 = new_strobj__12589.hasOwnProperty(k);

(new_strobj__12589[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12590))
{return (new cljs.core.ObjMap(this__12588.meta,this__12588.keys,new_strobj__12589));
} else
{var new_keys__12591 = cljs.core.aclone.call(null,this__12588.keys);

new_keys__12591.push(k);
return (new cljs.core.ObjMap(this__12588.meta,new_keys__12591,new_strobj__12589));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12588.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12592 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12592.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12595 = null;
var G__12595__12596 = (function (coll,k){
var this__12593 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12595__12597 = (function (coll,k,not_found){
var this__12594 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12594.strobj,(this__12594.strobj[k]),not_found);
});
G__12595 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12595__12596.call(this,coll,k);
case  3 :
return G__12595__12597.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12595;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__12600 = null;
var G__12600__12601 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__12600__12602 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__12600 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__12600__12601.call(this,_,k);
case  3 :
return G__12600__12602.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12600;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12604 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12605 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12606 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__12606.count)))
{var hashes__12607 = cljs.core.js_keys.call(null,this__12606.hashobj);

return cljs.core.mapcat.call(null,(function (p1__12599_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12606.hashobj[p1__12599_SHARP_])));
}),hashes__12607);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12608 = this;
return (new cljs.core.HashMap(meta,this__12608.count,this__12608.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12609 = this;
var h__12610 = cljs.core.hash.call(null,k);
var bucket__12611 = (this__12609.hashobj[h__12610]);
var i__12612 = (cljs.core.truth_(bucket__12611)?cljs.core.scan_array.call(null,2,k,bucket__12611):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12612)))
{return coll;
} else
{var new_hashobj__12613 = goog.object.clone.call(null,this__12609.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__12611.length)))
{cljs.core.js_delete.call(null,new_hashobj__12613,h__12610);
} else
{var new_bucket__12614 = cljs.core.aclone.call(null,bucket__12611);

new_bucket__12614.splice(i__12612,2);
(new_hashobj__12613[h__12610] = new_bucket__12614);
}
return (new cljs.core.HashMap(this__12609.meta,cljs.core.dec.call(null,this__12609.count),new_hashobj__12613));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12615 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12615.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12616 = this;
return this__12616.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12617 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12618 = this;
return this__12618.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12619 = this;
var h__12620 = cljs.core.hash.call(null,k);
var bucket__12621 = (this__12619.hashobj[h__12620]);

if(cljs.core.truth_(bucket__12621))
{var new_bucket__12622 = cljs.core.aclone.call(null,bucket__12621);
var new_hashobj__12623 = goog.object.clone.call(null,this__12619.hashobj);

(new_hashobj__12623[h__12620] = new_bucket__12622);
var temp__3723__auto____12624 = cljs.core.scan_array.call(null,2,k,new_bucket__12622);

if(cljs.core.truth_(temp__3723__auto____12624))
{var i__12625 = temp__3723__auto____12624;

(new_bucket__12622[cljs.core.inc.call(null,i__12625)] = v);
return (new cljs.core.HashMap(this__12619.meta,this__12619.count,new_hashobj__12623));
} else
{new_bucket__12622.push(k,v);
return (new cljs.core.HashMap(this__12619.meta,cljs.core.inc.call(null,this__12619.count),new_hashobj__12623));
}
} else
{var new_hashobj__12626 = goog.object.clone.call(null,this__12619.hashobj);

(new_hashobj__12626[h__12620] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12619.meta,cljs.core.inc.call(null,this__12619.count),new_hashobj__12626));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12627 = this;
var bucket__12628 = (this__12627.hashobj[cljs.core.hash.call(null,k)]);
var i__12629 = (cljs.core.truth_(bucket__12628)?cljs.core.scan_array.call(null,2,k,bucket__12628):null);

if(cljs.core.truth_(i__12629))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12634 = null;
var G__12634__12635 = (function (coll,k){
var this__12630 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12634__12636 = (function (coll,k,not_found){
var this__12631 = this;
var bucket__12632 = (this__12631.hashobj[cljs.core.hash.call(null,k)]);
var i__12633 = (cljs.core.truth_(bucket__12632)?cljs.core.scan_array.call(null,2,k,bucket__12632):null);

if(cljs.core.truth_(i__12633))
{return (bucket__12632[cljs.core.inc.call(null,i__12633)]);
} else
{return not_found;
}
});
G__12634 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12634__12635.call(this,coll,k);
case  3 :
return G__12634__12636.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12634;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12638 = ks.length;

var i__12639 = 0;
var out__12640 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__12639,len__12638)))
{{
var G__12641 = cljs.core.inc.call(null,i__12639);
var G__12642 = cljs.core.assoc.call(null,out__12640,(ks[i__12639]),(vs[i__12639]));
i__12639 = G__12641;
out__12640 = G__12642;
continue;
}
} else
{return out__12640;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__12643 = null;
var G__12643__12644 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__12643__12645 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__12643 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__12643__12644.call(this,_,k);
case  3 :
return G__12643__12645.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12643;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__12647 = cljs.core.seq.call(null,keyvals);
var out__12648 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12647))
{{
var G__12649 = cljs.core.nnext.call(null,in$__12647);
var G__12650 = cljs.core.assoc.call(null,out__12648,cljs.core.first.call(null,in$__12647),cljs.core.second.call(null,in$__12647));
in$__12647 = G__12649;
out__12648 = G__12650;
continue;
}
} else
{return out__12648;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__12651){
var keyvals = cljs.core.seq( arglist__12651 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__12652_SHARP_,p2__12653_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____12654 = p1__12652_SHARP_;

if(cljs.core.truth_(or__3576__auto____12654))
{return or__3576__auto____12654;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12653_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__12655){
var maps = cljs.core.seq( arglist__12655 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__12658 = (function (m,e){
var k__12656 = cljs.core.first.call(null,e);
var v__12657 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12656)))
{return cljs.core.assoc.call(null,m,k__12656,f.call(null,cljs.core.get.call(null,m,k__12656),v__12657));
} else
{return cljs.core.assoc.call(null,m,k__12656,v__12657);
}
});
var merge2__12660 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12658,(function (){var or__3576__auto____12659 = m1;

if(cljs.core.truth_(or__3576__auto____12659))
{return or__3576__auto____12659;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12660,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__12661){
var f = cljs.core.first(arglist__12661);
var maps = cljs.core.rest(arglist__12661);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12663 = cljs.core.ObjMap.fromObject([],{});
var keys__12664 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12664))
{var key__12665 = cljs.core.first.call(null,keys__12664);
var entry__12666 = cljs.core.get.call(null,map,key__12665);

{
var G__12667 = (cljs.core.truth_(entry__12666)?cljs.core.assoc.call(null,ret__12663,key__12665,entry__12666):ret__12663);
var G__12668 = cljs.core.next.call(null,keys__12664);
ret__12663 = G__12667;
keys__12664 = G__12668;
continue;
}
} else
{return ret__12663;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12669 = this;
return (new cljs.core.Set(this__12669.meta,cljs.core.dissoc.call(null,this__12669.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12670 = this;
var and__3574__auto____12671 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____12671))
{var and__3574__auto____12672 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____12672))
{return cljs.core.every_QMARK_.call(null,(function (p1__12662_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12662_SHARP_);
}),other);
} else
{return and__3574__auto____12672;
}
} else
{return and__3574__auto____12671;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12673 = this;
return (new cljs.core.Set(this__12673.meta,cljs.core.assoc.call(null,this__12673.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12674 = this;
return cljs.core.keys.call(null,this__12674.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12675 = this;
return (new cljs.core.Set(meta,this__12675.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12676 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12676.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12677 = this;
return this__12677.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12678 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12679 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12682 = null;
var G__12682__12683 = (function (coll,v){
var this__12680 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12682__12684 = (function (coll,v,not_found){
var this__12681 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12681.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12682 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12682__12683.call(this,coll,v);
case  3 :
return G__12682__12684.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12682;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__12686 = null;
var G__12686__12687 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__12686__12688 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__12686 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__12686__12687.call(this,_,k);
case  3 :
return G__12686__12688.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12686;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12691 = cljs.core.seq.call(null,coll);
var out__12692 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12691))))
{{
var G__12693 = cljs.core.rest.call(null,in$__12691);
var G__12694 = cljs.core.conj.call(null,out__12692,cljs.core.first.call(null,in$__12691));
in$__12691 = G__12693;
out__12692 = G__12694;
continue;
}
} else
{return out__12692;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__12695 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____12696 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____12696))
{var e__12697 = temp__3723__auto____12696;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12697));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12695,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12690_SHARP_){
var temp__3723__auto____12698 = cljs.core.find.call(null,smap,p1__12690_SHARP_);

if(cljs.core.truth_(temp__3723__auto____12698))
{var e__12699 = temp__3723__auto____12698;

return cljs.core.second.call(null,e__12699);
} else
{return p1__12690_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12707 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12700,seen){
while(true){
var vec__12701__12702 = p__12700;
var f__12703 = cljs.core.nth.call(null,vec__12701__12702,0,null);
var xs__12704 = vec__12701__12702;

var temp__3726__auto____12705 = cljs.core.seq.call(null,xs__12704);

if(cljs.core.truth_(temp__3726__auto____12705))
{var s__12706 = temp__3726__auto____12705;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12703)))
{{
var G__12708 = cljs.core.rest.call(null,s__12706);
var G__12709 = seen;
p__12700 = G__12708;
seen = G__12709;
continue;
}
} else
{return cljs.core.cons.call(null,f__12703,step.call(null,cljs.core.rest.call(null,s__12706),cljs.core.conj.call(null,seen,f__12703)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12707.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12710 = cljs.core.Vector.fromArray([]);
var s__12711 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12711)))
{{
var G__12712 = cljs.core.conj.call(null,ret__12710,cljs.core.first.call(null,s__12711));
var G__12713 = cljs.core.next.call(null,s__12711);
ret__12710 = G__12712;
s__12711 = G__12713;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12710);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____12714 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____12714))
{return or__3576__auto____12714;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12715 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__12715,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__12715));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____12716 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____12716))
{return or__3576__auto____12716;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12717 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__12717,-1)))
{return cljs.core.subs.call(null,x,2,i__12717);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__12720 = cljs.core.ObjMap.fromObject([],{});
var ks__12721 = cljs.core.seq.call(null,keys);
var vs__12722 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____12723 = ks__12721;

if(cljs.core.truth_(and__3574__auto____12723))
{return vs__12722;
} else
{return and__3574__auto____12723;
}
})()))
{{
var G__12724 = cljs.core.assoc.call(null,map__12720,cljs.core.first.call(null,ks__12721),cljs.core.first.call(null,vs__12722));
var G__12725 = cljs.core.next.call(null,ks__12721);
var G__12726 = cljs.core.next.call(null,vs__12722);
map__12720 = G__12724;
ks__12721 = G__12725;
vs__12722 = G__12726;
continue;
}
} else
{return map__12720;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__12729 = (function (k,x){
return x;
});
var max_key__12730 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12731 = (function() { 
var G__12733__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12718_SHARP_,p2__12719_SHARP_){
return max_key.call(null,k,p1__12718_SHARP_,p2__12719_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12733 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12733__delegate.call(this, k, x, y, more);
};
G__12733.cljs$lang$maxFixedArity = 3;
G__12733.cljs$lang$applyTo = (function (arglist__12734){
var k = cljs.core.first(arglist__12734);
var x = cljs.core.first(cljs.core.next(arglist__12734));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12734)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12734)));
return G__12733__delegate.call(this, k, x, y, more);
});
return G__12733;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12729.call(this,k,x);
case  3 :
return max_key__12730.call(this,k,x,y);
default:
return max_key__12731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12731.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12735 = (function (k,x){
return x;
});
var min_key__12736 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12737 = (function() { 
var G__12739__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12727_SHARP_,p2__12728_SHARP_){
return min_key.call(null,k,p1__12727_SHARP_,p2__12728_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12739 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12739__delegate.call(this, k, x, y, more);
};
G__12739.cljs$lang$maxFixedArity = 3;
G__12739.cljs$lang$applyTo = (function (arglist__12740){
var k = cljs.core.first(arglist__12740);
var x = cljs.core.first(cljs.core.next(arglist__12740));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12740)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12740)));
return G__12739__delegate.call(this, k, x, y, more);
});
return G__12739;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12735.call(this,k,x);
case  3 :
return min_key__12736.call(this,k,x,y);
default:
return min_key__12737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12737.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__12743 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__12744 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12741 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12741))
{var s__12742 = temp__3726__auto____12741;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12742),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12742)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__12743.call(this,n,step);
case  3 :
return partition_all__12744.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12746))
{var s__12747 = temp__3726__auto____12746;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12747))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12747),take_while.call(null,pred,cljs.core.rest.call(null,s__12747)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1, and end
* to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__12748 = (function (){
return cljs.core.iterate.call(null,cljs.core.inc,0);
});
var range__12749 = (function (end){
return range.call(null,0,end,1);
});
var range__12750 = (function (start,end){
return range.call(null,start,end,1);
});
var range__12751 = (function (start,end,step){
return cljs.core.take_while.call(null,(function (n){
return cljs.core._LT_.call(null,n,end);
}),cljs.core.iterate.call(null,(function (x){
return cljs.core._PLUS_.call(null,x,step);
}),start));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__12748.call(this);
case  1 :
return range__12749.call(this,start);
case  2 :
return range__12750.call(this,start,end);
case  3 :
return range__12751.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12753 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12753))
{var s__12754 = temp__3726__auto____12753;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12754),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12754)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12756 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12756))
{var s__12757 = temp__3726__auto____12756;

var fst__12758 = cljs.core.first.call(null,s__12757);
var fv__12759 = f.call(null,fst__12758);
var run__12760 = cljs.core.cons.call(null,fst__12758,cljs.core.take_while.call(null,(function (p1__12755_SHARP_){
return cljs.core._EQ_.call(null,fv__12759,f.call(null,p1__12755_SHARP_));
}),cljs.core.next.call(null,s__12757)));

return cljs.core.cons.call(null,run__12760,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12760),s__12757))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__12775 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____12771 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____12771))
{var s__12772 = temp__3723__auto____12771;

return reductions.call(null,f,cljs.core.first.call(null,s__12772),cljs.core.rest.call(null,s__12772));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__12776 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____12773 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____12773))
{var s__12774 = temp__3726__auto____12773;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12774)),cljs.core.rest.call(null,s__12774));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__12775.call(this,f,init);
case  3 :
return reductions__12776.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__12779 = (function (f){
return (function() {
var G__12784 = null;
var G__12784__12785 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12784__12786 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12784__12787 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12784__12788 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12784__12789 = (function() { 
var G__12791__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12791 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12791__delegate.call(this, x, y, z, args);
};
G__12791.cljs$lang$maxFixedArity = 3;
G__12791.cljs$lang$applyTo = (function (arglist__12792){
var x = cljs.core.first(arglist__12792);
var y = cljs.core.first(cljs.core.next(arglist__12792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12792)));
return G__12791__delegate.call(this, x, y, z, args);
});
return G__12791;
})()
;
G__12784 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12784__12785.call(this);
case  1 :
return G__12784__12786.call(this,x);
case  2 :
return G__12784__12787.call(this,x,y);
case  3 :
return G__12784__12788.call(this,x,y,z);
default:
return G__12784__12789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12784.cljs$lang$maxFixedArity = 3;
G__12784.cljs$lang$applyTo = G__12784__12789.cljs$lang$applyTo;
return G__12784;
})()
});
var juxt__12780 = (function (f,g){
return (function() {
var G__12793 = null;
var G__12793__12794 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12793__12795 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12793__12796 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12793__12797 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12793__12798 = (function() { 
var G__12800__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12800 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12800__delegate.call(this, x, y, z, args);
};
G__12800.cljs$lang$maxFixedArity = 3;
G__12800.cljs$lang$applyTo = (function (arglist__12801){
var x = cljs.core.first(arglist__12801);
var y = cljs.core.first(cljs.core.next(arglist__12801));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12801)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12801)));
return G__12800__delegate.call(this, x, y, z, args);
});
return G__12800;
})()
;
G__12793 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12793__12794.call(this);
case  1 :
return G__12793__12795.call(this,x);
case  2 :
return G__12793__12796.call(this,x,y);
case  3 :
return G__12793__12797.call(this,x,y,z);
default:
return G__12793__12798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12793.cljs$lang$maxFixedArity = 3;
G__12793.cljs$lang$applyTo = G__12793__12798.cljs$lang$applyTo;
return G__12793;
})()
});
var juxt__12781 = (function (f,g,h){
return (function() {
var G__12802 = null;
var G__12802__12803 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12802__12804 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12802__12805 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12802__12806 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12802__12807 = (function() { 
var G__12809__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12809__delegate.call(this, x, y, z, args);
};
G__12809.cljs$lang$maxFixedArity = 3;
G__12809.cljs$lang$applyTo = (function (arglist__12810){
var x = cljs.core.first(arglist__12810);
var y = cljs.core.first(cljs.core.next(arglist__12810));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12810)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12810)));
return G__12809__delegate.call(this, x, y, z, args);
});
return G__12809;
})()
;
G__12802 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12802__12803.call(this);
case  1 :
return G__12802__12804.call(this,x);
case  2 :
return G__12802__12805.call(this,x,y);
case  3 :
return G__12802__12806.call(this,x,y,z);
default:
return G__12802__12807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12802.cljs$lang$maxFixedArity = 3;
G__12802.cljs$lang$applyTo = G__12802__12807.cljs$lang$applyTo;
return G__12802;
})()
});
var juxt__12782 = (function() { 
var G__12811__delegate = function (f,g,h,fs){
var fs__12778 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__12812 = null;
var G__12812__12813 = (function (){
return cljs.core.reduce.call(null,(function (p1__12761_SHARP_,p2__12762_SHARP_){
return cljs.core.conj.call(null,p1__12761_SHARP_,p2__12762_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__12778);
});
var G__12812__12814 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12763_SHARP_,p2__12764_SHARP_){
return cljs.core.conj.call(null,p1__12763_SHARP_,p2__12764_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__12778);
});
var G__12812__12815 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12765_SHARP_,p2__12766_SHARP_){
return cljs.core.conj.call(null,p1__12765_SHARP_,p2__12766_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__12778);
});
var G__12812__12816 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12767_SHARP_,p2__12768_SHARP_){
return cljs.core.conj.call(null,p1__12767_SHARP_,p2__12768_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__12778);
});
var G__12812__12817 = (function() { 
var G__12819__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12769_SHARP_,p2__12770_SHARP_){
return cljs.core.conj.call(null,p1__12769_SHARP_,cljs.core.apply.call(null,p2__12770_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__12778);
};
var G__12819 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12819__delegate.call(this, x, y, z, args);
};
G__12819.cljs$lang$maxFixedArity = 3;
G__12819.cljs$lang$applyTo = (function (arglist__12820){
var x = cljs.core.first(arglist__12820);
var y = cljs.core.first(cljs.core.next(arglist__12820));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12820)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12820)));
return G__12819__delegate.call(this, x, y, z, args);
});
return G__12819;
})()
;
G__12812 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12812__12813.call(this);
case  1 :
return G__12812__12814.call(this,x);
case  2 :
return G__12812__12815.call(this,x,y);
case  3 :
return G__12812__12816.call(this,x,y,z);
default:
return G__12812__12817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12812.cljs$lang$maxFixedArity = 3;
G__12812.cljs$lang$applyTo = G__12812__12817.cljs$lang$applyTo;
return G__12812;
})()
};
var G__12811 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12811__delegate.call(this, f, g, h, fs);
};
G__12811.cljs$lang$maxFixedArity = 3;
G__12811.cljs$lang$applyTo = (function (arglist__12821){
var f = cljs.core.first(arglist__12821);
var g = cljs.core.first(cljs.core.next(arglist__12821));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12821)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12821)));
return G__12811__delegate.call(this, f, g, h, fs);
});
return G__12811;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__12779.call(this,f);
case  2 :
return juxt__12780.call(this,f,g);
case  3 :
return juxt__12781.call(this,f,g,h);
default:
return juxt__12782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__12782.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__12823 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__12826 = cljs.core.next.call(null,coll);
coll = G__12826;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__12824 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____12822 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____12822))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____12822;
}
})()))
{{
var G__12827 = cljs.core.dec.call(null,n);
var G__12828 = cljs.core.next.call(null,coll);
n = G__12827;
coll = G__12828;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__12823.call(this,n);
case  2 :
return dorun__12824.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__12829 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__12830 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__12829.call(this,n);
case  2 :
return doall__12830.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__12832 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12832),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12832),1)))
{return cljs.core.first.call(null,matches__12832);
} else
{return cljs.core.vec.call(null,matches__12832);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__12833 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__12833)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12833),1)))
{return cljs.core.first.call(null,matches__12833);
} else
{return cljs.core.vec.call(null,matches__12833);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12834 = cljs.core.re_find.call(null,re,s);
var match_idx__12835 = s.search(re);
var match_str__12836 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__12834))?cljs.core.first.call(null,match_data__12834):match_data__12834);
var post_match__12837 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__12835,cljs.core.count.call(null,match_str__12836)));

if(cljs.core.truth_(match_data__12834))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12834,re_seq.call(null,re,post_match__12837));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new goog.global['RegExp'](s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__12838_SHARP_){
return print_one.call(null,p1__12838_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
goog.global['print'].call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____12839 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____12839))
{var and__3574__auto____12842 = (function (){var x__3995__auto____12840 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____12841 = x__3995__auto____12840;

if(cljs.core.truth_(and__3574__auto____12841))
{return x__3995__auto____12840.cljs$core$IMeta$;
} else
{return and__3574__auto____12841;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__3995__auto____12840);
}
})();

if(cljs.core.truth_(and__3574__auto____12842))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____12842;
}
} else
{return and__3574__auto____12839;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__3995__auto____12843 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____12844 = x__3995__auto____12843;

if(cljs.core.truth_(and__3574__auto____12844))
{return x__3995__auto____12843.cljs$core$IPrintable$;
} else
{return and__3574__auto____12844;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__3995__auto____12843);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__12845 = cljs.core.first.call(null,objs);
var sb__12846 = (new goog.string.StringBuffer());

var G__12847__12848 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__12847__12848))
{var obj__12849 = cljs.core.first.call(null,G__12847__12848);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__12849,first_obj__12845)))
{} else
{sb__12846.append(" ");
}
var G__12850__12851 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12849,opts));

while(true){
if(cljs.core.truth_(G__12850__12851))
{var string__12852 = cljs.core.first.call(null,G__12850__12851);

sb__12846.append(string__12852);
{
var G__12853 = cljs.core.next.call(null,G__12850__12851);
G__12850__12851 = G__12853;
continue;
}
} else
{}
break;
}
{
var G__12854 = cljs.core.next.call(null,G__12847__12848);
G__12847__12848 = G__12854;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__12846);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__12855 = cljs.core.first.call(null,objs);

var G__12856__12857 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__12856__12857))
{var obj__12858 = cljs.core.first.call(null,G__12856__12857);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__12858,first_obj__12855)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__12859__12860 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12858,opts));

while(true){
if(cljs.core.truth_(G__12859__12860))
{var string__12861 = cljs.core.first.call(null,G__12859__12860);

cljs.core.string_print.call(null,string__12861);
{
var G__12862 = cljs.core.next.call(null,G__12859__12860);
G__12859__12860 = G__12862;
continue;
}
} else
{}
break;
}
{
var G__12863 = cljs.core.next.call(null,G__12856__12857);
G__12856__12857 = G__12863;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__12864){
var objs = cljs.core.seq( arglist__12864 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__12865){
var objs = cljs.core.seq( arglist__12865 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__12866){
var objs = cljs.core.seq( arglist__12866 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__12867){
var objs = cljs.core.seq( arglist__12867 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__12868){
var objs = cljs.core.seq( arglist__12868 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__12869 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12869,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____12870 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____12870))
{var nspc__12871 = temp__3726__auto____12870;

return cljs.core.str.call(null,nspc__12871,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____12872 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____12872))
{var nspc__12873 = temp__3726__auto____12872;

return cljs.core.str.call(null,nspc__12873,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__12874 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12874,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__12875 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__12875.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__12876 = this;
return this__12876.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__12877 = this;
return this__12877.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12878 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__12885 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__12886 = (function() { 
var G__12888__delegate = function (x,p__12879){
var map__12880__12881 = p__12879;
var map__12880__12882 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12880__12881))?cljs.core.apply.call(null,cljs.core.hash_map,map__12880__12881):map__12880__12881);
var validator__12883 = cljs.core.get.call(null,map__12880__12882,"﷐'validator");
var meta__12884 = cljs.core.get.call(null,map__12880__12882,"﷐'meta");

return (new cljs.core.Atom(x,meta__12884,validator__12883));
};
var G__12888 = function (x,var_args){
var p__12879 = null;
if (goog.isDef(var_args)) {
  p__12879 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12888__delegate.call(this, x, p__12879);
};
G__12888.cljs$lang$maxFixedArity = 1;
G__12888.cljs$lang$applyTo = (function (arglist__12889){
var x = cljs.core.first(arglist__12889);
var p__12879 = cljs.core.rest(arglist__12889);
return G__12888__delegate.call(this, x, p__12879);
});
return G__12888;
})()
;
atom = function(x,var_args){
var p__12879 = var_args;
switch(arguments.length){
case  1 :
return atom__12885.call(this,x);
default:
return atom__12886.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__12886.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____12890 = a.validator;

if(cljs.core.truth_(temp__3726__auto____12890))
{var v__12891 = temp__3726__auto____12890;

if(cljs.core.truth_(v__12891.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___12892 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___12893 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___12894 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___12895 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___12896 = (function() { 
var G__12898__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__12898 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12898__delegate.call(this, a, f, x, y, z, more);
};
G__12898.cljs$lang$maxFixedArity = 5;
G__12898.cljs$lang$applyTo = (function (arglist__12899){
var a = cljs.core.first(arglist__12899);
var f = cljs.core.first(cljs.core.next(arglist__12899));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12899)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12899))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12899)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12899)))));
return G__12898__delegate.call(this, a, f, x, y, z, more);
});
return G__12898;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___12892.call(this,a,f);
case  3 :
return swap_BANG___12893.call(this,a,f,x);
case  4 :
return swap_BANG___12894.call(this,a,f,x,y);
case  5 :
return swap_BANG___12895.call(this,a,f,x,y,z);
default:
return swap_BANG___12896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___12896.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__12900){
var iref = cljs.core.first(arglist__12900);
var f = cljs.core.first(cljs.core.next(arglist__12900));
var args = cljs.core.rest(cljs.core.next(arglist__12900));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__12901 = (function (){
return gensym.call(null,"G__");
});
var gensym__12902 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__12901.call(this);
case  1 :
return gensym__12902.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__12904 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__12904.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__12905 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__12905.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__12905.state,this__12905.f);
}
return cljs.core.deref.call(null,this__12905.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__12906){
var body = cljs.core.seq( arglist__12906 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__12907__12908 = options;
var map__12907__12909 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__12907__12908))?cljs.core.apply.call(null,cljs.core.hash_map,map__12907__12908):map__12907__12908);
var keywordize_keys__12910 = cljs.core.get.call(null,map__12907__12909,"﷐'keywordize-keys");
var keyfn__12911 = (cljs.core.truth_(keywordize_keys__12910)?cljs.core.keyword:cljs.core.str);
var f__12917 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__4049__auto____12916 = (function iter__12912(s__12913){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12913__12914 = s__12913;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__12913__12914)))
{var k__12915 = cljs.core.first.call(null,s__12913__12914);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__12911.call(null,k__12915),thisfn.call(null,(x[k__12915]))]),iter__12912.call(null,cljs.core.rest.call(null,s__12913__12914)));
} else
{return null;
}
break;
}
})));
});

return iter__4049__auto____12916.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__12917.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__12918){
var x = cljs.core.first(arglist__12918);
var options = cljs.core.rest(arglist__12918);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__12919 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__12923__delegate = function (args){
var temp__3723__auto____12920 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__12919),args);

if(cljs.core.truth_(temp__3723__auto____12920))
{var v__12921 = temp__3723__auto____12920;

return v__12921;
} else
{var ret__12922 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__12919,cljs.core.assoc,args,ret__12922);
return ret__12922;
}
};
var G__12923 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12923__delegate.call(this, args);
};
G__12923.cljs$lang$maxFixedArity = 0;
G__12923.cljs$lang$applyTo = (function (arglist__12924){
var args = cljs.core.seq( arglist__12924 );;
return G__12923__delegate.call(this, args);
});
return G__12923;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__12926 = (function (f){
while(true){
var ret__12925 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__12925)))
{{
var G__12929 = ret__12925;
f = G__12929;
continue;
}
} else
{return ret__12925;
}
break;
}
});
var trampoline__12927 = (function() { 
var G__12930__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__12930 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12930__delegate.call(this, f, args);
};
G__12930.cljs$lang$maxFixedArity = 1;
G__12930.cljs$lang$applyTo = (function (arglist__12931){
var f = cljs.core.first(arglist__12931);
var args = cljs.core.rest(arglist__12931);
return G__12930__delegate.call(this, f, args);
});
return G__12930;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__12926.call(this,f);
default:
return trampoline__12927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__12927.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__12932 = (function (){
return rand.call(null,1);
});
var rand__12933 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__12932.call(this);
case  1 :
return rand__12933.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__12935 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__12935,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__12935,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___12944 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___12945 = (function (h,child,parent){
var or__3576__auto____12936 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____12936))
{return or__3576__auto____12936;
} else
{var or__3576__auto____12937 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____12937))
{return or__3576__auto____12937;
} else
{var and__3574__auto____12938 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____12938))
{var and__3574__auto____12939 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____12939))
{var and__3574__auto____12940 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____12940))
{var ret__12941 = true;
var i__12942 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____12943 = cljs.core.not.call(null,ret__12941);

if(cljs.core.truth_(or__3576__auto____12943))
{return or__3576__auto____12943;
} else
{return cljs.core._EQ_.call(null,i__12942,cljs.core.count.call(null,parent));
}
})()))
{return ret__12941;
} else
{{
var G__12947 = isa_QMARK_.call(null,h,child.call(null,i__12942),parent.call(null,i__12942));
var G__12948 = cljs.core.inc.call(null,i__12942);
ret__12941 = G__12947;
i__12942 = G__12948;
continue;
}
}
break;
}
} else
{return and__3574__auto____12940;
}
} else
{return and__3574__auto____12939;
}
} else
{return and__3574__auto____12938;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___12944.call(this,h,child);
case  3 :
return isa_QMARK___12945.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__12949 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__12950 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__12949.call(this,h);
case  2 :
return parents__12950.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__12952 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__12953 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__12952.call(this,h);
case  2 :
return ancestors__12953.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__12955 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__12956 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__12955.call(this,h);
case  2 :
return descendants__12956.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__12966 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__12967 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__12961 = "﷐'parents".call(null,h);
var td__12962 = "﷐'descendants".call(null,h);
var ta__12963 = "﷐'ancestors".call(null,h);
var tf__12964 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____12965 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__12961.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__12963.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__12963.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__12961,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__12964.call(null,"﷐'ancestors".call(null,h),tag,td__12962,parent,ta__12963),"﷐'descendants":tf__12964.call(null,"﷐'descendants".call(null,h),parent,ta__12963,tag,td__12962)});
})());

if(cljs.core.truth_(or__3576__auto____12965))
{return or__3576__auto____12965;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__12966.call(this,h,tag);
case  3 :
return derive__12967.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__12973 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__12974 = (function (h,tag,parent){
var parentMap__12969 = "﷐'parents".call(null,h);
var childsParents__12970 = (cljs.core.truth_(parentMap__12969.call(null,tag))?cljs.core.disj.call(null,parentMap__12969.call(null,tag),parent):cljs.core.set([]));
var newParents__12971 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__12970))?cljs.core.assoc.call(null,parentMap__12969,tag,childsParents__12970):cljs.core.dissoc.call(null,parentMap__12969,tag));
var deriv_seq__12972 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12958_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__12958_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__12958_SHARP_),cljs.core.second.call(null,p1__12958_SHARP_)));
}),cljs.core.seq.call(null,newParents__12971)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__12969.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__12959_SHARP_,p2__12960_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__12959_SHARP_,p2__12960_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__12972));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__12973.call(this,h,tag);
case  3 :
return underive__12974.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__12976 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____12978 = (cljs.core.truth_((function (){var and__3574__auto____12977 = xprefs__12976;

if(cljs.core.truth_(and__3574__auto____12977))
{return xprefs__12976.call(null,y);
} else
{return and__3574__auto____12977;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____12978))
{return or__3576__auto____12978;
} else
{var or__3576__auto____12980 = (function (){var ps__12979 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__12979))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__12979),prefer_table)))
{} else
{}
{
var G__12983 = cljs.core.rest.call(null,ps__12979);
ps__12979 = G__12983;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____12980))
{return or__3576__auto____12980;
} else
{var or__3576__auto____12982 = (function (){var ps__12981 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__12981))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__12981),y,prefer_table)))
{} else
{}
{
var G__12984 = cljs.core.rest.call(null,ps__12981);
ps__12981 = G__12984;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____12982))
{return or__3576__auto____12982;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____12985 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____12985))
{return or__3576__auto____12985;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__12994 = cljs.core.reduce.call(null,(function (be,p__12986){
var vec__12987__12988 = p__12986;
var k__12989 = cljs.core.nth.call(null,vec__12987__12988,0,null);
var ___12990 = cljs.core.nth.call(null,vec__12987__12988,1,null);
var e__12991 = vec__12987__12988;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__12989)))
{var be2__12993 = (cljs.core.truth_((function (){var or__3576__auto____12992 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____12992))
{return or__3576__auto____12992;
} else
{return cljs.core.dominates.call(null,k__12989,cljs.core.first.call(null,be),prefer_table);
}
})())?e__12991:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__12993),k__12989,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__12989," and ",cljs.core.first.call(null,be2__12993),", and neither is preferred");
}
return be2__12993;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__12994))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__12994));
return cljs.core.second.call(null,best_entry__12994);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____12995 = mf;

if(cljs.core.truth_(and__3574__auto____12995))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____12995;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____12996 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____12996))
{return or__3576__auto____12996;
} else
{return (_reset["_"]);
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____12997 = mf;

if(cljs.core.truth_(and__3574__auto____12997))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____12997;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____12998 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____12998))
{return or__3576__auto____12998;
} else
{return (_add_method["_"]);
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____12999 = mf;

if(cljs.core.truth_(and__3574__auto____12999))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____12999;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____13000 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____13000))
{return or__3576__auto____13000;
} else
{return (_remove_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____13001 = mf;

if(cljs.core.truth_(and__3574__auto____13001))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____13001;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____13002 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____13002))
{return or__3576__auto____13002;
} else
{return (_prefer_method["_"]);
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____13003 = mf;

if(cljs.core.truth_(and__3574__auto____13003))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____13003;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____13004 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____13004))
{return or__3576__auto____13004;
} else
{return (_get_method["_"]);
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____13005 = mf;

if(cljs.core.truth_(and__3574__auto____13005))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____13005;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____13006 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____13006))
{return or__3576__auto____13006;
} else
{return (_methods["_"]);
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____13007 = mf;

if(cljs.core.truth_(and__3574__auto____13007))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____13007;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____13008 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____13008))
{return or__3576__auto____13008;
} else
{return (_prefers["_"]);
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____13009 = mf;

if(cljs.core.truth_(and__3574__auto____13009))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____13009;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____13010 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____13010))
{return or__3576__auto____13010;
} else
{return (_invoke["_"]);
}
})().call(null,mf,args);
}
});
/**
* @param {...*} var_args
*/
cljs.core.do_invoke = (function() { 
var do_invoke__delegate = function (mf,dispatch_fn,args){
var fargs__13011 = cljs.core.flatten.call(null,args);
var dispatch_val__13012 = cljs.core.apply.call(null,dispatch_fn,fargs__13011);
var target_fn__13013 = cljs.core._get_method.call(null,mf,dispatch_val__13012);

if(cljs.core.truth_(target_fn__13013))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__13012);
}
return cljs.core.apply.call(null,target_fn__13013,fargs__13011);
};
var do_invoke = function (mf,dispatch_fn,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return do_invoke__delegate.call(this, mf, dispatch_fn, args);
};
do_invoke.cljs$lang$maxFixedArity = 2;
do_invoke.cljs$lang$applyTo = (function (arglist__13014){
var mf = cljs.core.first(arglist__13014);
var dispatch_fn = cljs.core.first(cljs.core.next(arglist__13014));
var args = cljs.core.rest(cljs.core.next(arglist__13014));
return do_invoke__delegate.call(this, mf, dispatch_fn, args);
});
return do_invoke;
})()
;

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__13015 = this;
cljs.core.swap_BANG_.call(null,this__13015.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13015.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13015.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13015.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__13016 = this;
cljs.core.swap_BANG_.call(null,this__13016.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13016.method_cache,this__13016.method_table,this__13016.cached_hierarchy,this__13016.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__13017 = this;
cljs.core.swap_BANG_.call(null,this__13017.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13017.method_cache,this__13017.method_table,this__13017.cached_hierarchy,this__13017.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__13018 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13018.cached_hierarchy),cljs.core.deref.call(null,this__13018.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__13018.method_cache,this__13018.method_table,this__13018.cached_hierarchy,this__13018.hierarchy);
}
var temp__3723__auto____13019 = cljs.core.deref.call(null,this__13018.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____13019))
{var target_fn__13020 = temp__3723__auto____13019;

return target_fn__13020;
} else
{var temp__3723__auto____13021 = cljs.core.find_and_cache_best_method.call(null,this__13018.name,dispatch_val,this__13018.hierarchy,this__13018.method_table,this__13018.prefer_table,this__13018.method_cache,this__13018.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____13021))
{var target_fn__13022 = temp__3723__auto____13021;

return target_fn__13022;
} else
{return cljs.core.deref.call(null,this__13018.method_table).call(null,this__13018.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13023 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13023.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__13023.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__13023.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13023.method_cache,this__13023.method_table,this__13023.cached_hierarchy,this__13023.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__13024 = this;
return cljs.core.deref.call(null,this__13024.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__13025 = this;
return cljs.core.deref.call(null,this__13025.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__13026 = this;
return cljs.core.do_invoke.call(null,mf,this__13026.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__13027__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__13027 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13027__delegate.call(this, _, args);
};
G__13027.cljs$lang$maxFixedArity = 1;
G__13027.cljs$lang$applyTo = (function (arglist__13028){
var _ = cljs.core.first(arglist__13028);
var args = cljs.core.rest(arglist__13028);
return G__13027__delegate.call(this, _, args);
});
return G__13027;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
