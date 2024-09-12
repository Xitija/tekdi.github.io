"use strict";(self.webpackChunktekdi_docs=self.webpackChunktekdi_docs||[]).push([[4871],{8670:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=i(4848),d=i(8453);const r={sidebar_position:6},s="Database Schema",c={id:"notifications-service/database-schema",title:"Database Schema",description:"Entities ####",source:"@site/docs/notifications-service/6_database-schema.md",sourceDirName:"notifications-service",slug:"/notifications-service/database-schema",permalink:"/docs/notifications-service/database-schema",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/notifications-service/architecture"},next:{title:"API Docs",permalink:"/docs/notifications-service/api-docs"}},a={},h=[{value:"Entities",id:"entities",level:3},{value:"NotificationActionTemplates",id:"notificationactiontemplates",level:4},{value:"NotificationTemplateConfig",id:"notificationtemplateconfig",level:4},{value:"NotificationLogs",id:"notificationlogs",level:4}];function l(t){const e={h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"database-schema",children:"Database Schema"}),"\n",(0,n.jsx)(e.h3,{id:"entities",children:"Entities"}),"\n",(0,n.jsx)(e.h4,{id:"notificationactiontemplates",children:"NotificationActionTemplates"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Column Name"}),(0,n.jsx)(e.th,{children:"Data Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"id"}),(0,n.jsx)(e.td,{children:"integer"}),(0,n.jsx)(e.td,{children:"Unique identifier for the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"title"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Title of the notification template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"key"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Key identifier for the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"status"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Status of the template (e.g., active, inactive)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"createdBy"}),(0,n.jsx)(e.td,{children:"uuid"}),(0,n.jsx)(e.td,{children:"ID of the user who created the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"updatedBy"}),(0,n.jsx)(e.td,{children:"uuid"}),(0,n.jsx)(e.td,{children:"ID of the user who last updated the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"context"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Context or purpose of the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"replacementTags"}),(0,n.jsx)(e.td,{children:"jsonb"}),(0,n.jsx)(e.td,{children:"JSON data containing replacement tags for dynamic content in the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"createdOn"}),(0,n.jsx)(e.td,{children:"timestamp"}),(0,n.jsx)(e.td,{children:"Timestamp for when the template was created"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"updatedOn"}),(0,n.jsx)(e.td,{children:"timestamp"}),(0,n.jsx)(e.td,{children:"Timestamp for when the template was last updated"})]})]})]}),"\n",(0,n.jsx)(e.h4,{id:"notificationtemplateconfig",children:"NotificationTemplateConfig"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Column Name"}),(0,n.jsx)(e.th,{children:"Data Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"id"}),(0,n.jsx)(e.td,{children:"uuid"}),(0,n.jsx)(e.td,{children:"Unique identifier for the configuration"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"language"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Language code for localization of the template"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"subject"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Subject line of the notification email/SMS"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"body"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Body/content of the notification email/SMS"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"createdOn"}),(0,n.jsx)(e.td,{children:"timestamp"}),(0,n.jsx)(e.td,{children:"Timestamp for when the configuration was created"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"updatedOn"}),(0,n.jsx)(e.td,{children:"timestamp"}),(0,n.jsx)(e.td,{children:"Timestamp for when the configuration was last updated"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"status"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Status of the configuration (e.g., active, inactive)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"template_id"}),(0,n.jsx)(e.td,{children:"integer"}),(0,n.jsx)(e.td,{children:"Foreign key referencing the NotificationTemplates table"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"type"}),(0,n.jsx)(e.td,{children:"character varying"}),(0,n.jsx)(e.td,{children:"Type of configuration (e.g., email, SMS)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"createdBy"}),(0,n.jsx)(e.td,{children:"uuid"}),(0,n.jsx)(e.td,{children:"ID of the user who created the configuration"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"updatedBy"}),(0,n.jsx)(e.td,{children:"uuid"}),(0,n.jsx)(e.td,{children:"ID of the user who last updated the configuration"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Notification DB",src:i(692).A+"",width:"560",height:"429"})}),"\n",(0,n.jsx)(e.h4,{id:"notificationlogs",children:"NotificationLogs"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Column Name"}),(0,n.jsx)(e.th,{children:"Data Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"id"}),(0,n.jsx)(e.td,{children:"uuid"}),(0,n.jsx)(e.td,{children:"Unique identifier (Primary Key)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"status"}),(0,n.jsx)(e.td,{children:"boolean"}),(0,n.jsx)(e.td,{children:"Status of the notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"createdOn"}),(0,n.jsx)(e.td,{children:"timestamp with time zone"}),(0,n.jsx)(e.td,{children:"Timestamp when the record was created"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"context"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Context of the notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"action"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Action associated with the notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"subject"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Subject of the notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"body"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Body content of the notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"type"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Type of notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"recipient"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Recipient of the notification"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"error"}),(0,n.jsx)(e.td,{children:"character varying(255)"}),(0,n.jsx)(e.td,{children:"Error message, if any"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"NotificationLogs",src:i(2159).A+"",width:"212",height:"493"})})]})}function o(t={}){const{wrapper:e}={...(0,d.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},692:(t,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/notification_db1-439cb0c5303f86917b5e3c6ed97c0fbc.png"},2159:(t,e,i)=>{i.d(e,{A:()=>n});const n=i.p+"assets/images/notification_db2-53fd0505667a9febb6295e00dc9e3dfd.png"},8453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var n=i(6540);const d={},r=n.createContext(d);function s(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:s(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);