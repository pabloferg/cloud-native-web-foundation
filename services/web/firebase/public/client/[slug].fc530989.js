import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as r,c as l,b as c,f as u,g as h,h as f,j as p,k as d,l as m,n as g}from"./client.6f4611f7.js";function v(t){let s,a,v,j,x,y,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),j=o(E),x=e(),y=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);j=h(s,E),s.forEach(r),x=l(t),y=c(t,"DIV",{class:!0}),u(y).forEach(r),this.h()},h(){f(y,"class","content svelte-gnxal1")},m(t,s){p(t,a,s),p(t,v,s),d(v,j),p(t,x,s),p(t,y,s),y.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&m(j,E),1&a&&H!==(H=t[0].html+"")&&(y.innerHTML=H)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(x),t&&r(y)}}}async function j({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,v,a,{post:0})}}export{j as preload};
