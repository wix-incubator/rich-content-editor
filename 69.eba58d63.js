(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{207:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=(n(144),n(147)),d=n(154),i=(n(146),n(142),n(145),n(143),n(22),n(155),n(598)),p=n.n(i),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.updateAriaHiddenId=function(e){return p.a.setAppElement(e||"body")},t.parentSelector=function(){var e=t.props.target,n=document.body;return e&&(n=document.getElementById(e)),n||document.body},t}return Object(a.b)(t,e),t.prototype.componentDidMount=function(){this.updateAriaHiddenId(this.props.ariaHiddenId)},t.prototype.componentWillReceiveProps=function(e){e.ariaHiddenId!==this.props.ariaHiddenId&&this.updateAriaHiddenId(e.ariaHiddenId)},t.prototype.render=function(){var e=this.props,t=e.isOpen,n=e.contentLabel,o=e.style,i=e.role,l=e.onRequestClose,s=e.ModalsMap,c=e.locale,u=Object(a.c)(e,["isOpen","contentLabel","style","role","onRequestClose","ModalsMap","locale"]);return r.a.createElement(p.a,{isOpen:t,contentLabel:n,style:o,role:i,parentSelector:this.parentSelector,onRequestClose:l},r.a.createElement(d.b,Object(a.d)({modalsMap:s,locale:c},u)))},t}(o.Component);t.default=l}}]);