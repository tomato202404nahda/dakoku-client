import i18next from "i18next";
import { FuseNavItemType } from "@fuse/core/FuseNavigation/types/FuseNavItemType";
import ar from "./navigation-i18n/ar";
import en from "./navigation-i18n/en";
import tr from "./navigation-i18n/tr";
import jp from "./navigation-i18n/jp";

i18next.addResourceBundle("en", "navigation", en);
i18next.addResourceBundle("tr", "navigation", tr);
i18next.addResourceBundle("ar", "navigation", ar);
i18next.addResourceBundle("jp", "navigation", jp);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
  {
    id: "Experiment",
    title: "Experiment",
    type: "group",
    translate: "EXPRMNT",
    children: [
      {
        id: "Experiment.NewPage",
        title: "New Page",
        type: "item",
        translate: "NEWPAGE",
        icon: "heroicons-solid:newspaper",
        url: "newpage",
      },
      {
        id: "Experiment.EmployeeManagement",
        title: "Employee Management",
        type: "item",
        icon: "heroicons-solid:pencil-square",
        translate: "EMPMGMT",
        url: "experiment/employee-management",
      },
      {
        id: "QRScan",
        title: "QRScanner",
        type: "item",
        icon: "",
        url: "scanqr",
      },
    ],
  },
];
// [
//   {
//     id: "Wrapper",
//     title: "From Skeleton And Self-trial",
//     type: "collapse",
//     children: [
//       {
//         id: "Example",
//         title: "Example Group",
//         subtitle: "Example Provided by Fuse",
//         type: "group",
//         children: [
//           {
//             id: "example-component",
//             title: "Example",
//             translate: "EXAMPLE",
//             type: "item",
//             icon: "heroicons-outline:star",
//             url: "example",
//           },
//         ],
//       },
//       {
//         id: "Trial",
//         title: "Trial Group",
//         subtitle: "Try from Skeleton",
//         type: "group",
//         children: [
//           {
//             id: "NewPage-component",
//             title: "New Page",
//             translate: "NEWPAGE",
//             type: "collapse",
//             icon: "heroicons-outline:newspaper",
//             children: [
//               {
//                 id: "NewPage-component.NewPage",
//                 title: "NewPage",
//                 translate: "NEWPAGE",
//                 type: "item",
//                 url: "newpage",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "trying to clone",
//     title: "Clone",
//     subtitle: "Demo Cloning Attempt",
//     type: "collapse",
//     children: [
//       {
//         id: "Dashboard",
//         title: "DASHBOARDS",
//         subtitle: "Unique dashboard designs",
//         type: "group",
//         children: [
//           {
//             id: "Dashboard.project",
//             title: "Project",
//             type: "item",
//             icon: "heroicons-outline:clipboard-check",
//             url: "project",
//           },
//           {
//             id: "Dashboard.analytics",
//             title: "Analytics",
//             type: "item",
//             icon: "heroicons-outline:chart-pie",
//             url: "analytics",
//           },
//           {
//             id: "Dashboard.finance",
//             title: "Finance",
//             type: "item",
//             icon: "heroicons-outline:cash",
//             url: "finance",
//           },
//           {
//             id: "Dashboard.crypto",
//             title: "Crypto",
//             type: "item",
//             icon: "heroicons-outline:currency-dollar",
//             url: "crypto",
//           },
//         ],
//       },
//       {
//         id: "Applications",
//         title: "APPLICATIONS",
//         subtitle: "Custom made application designs",
//         type: "group",
//         children: [
//           {
//             id: "Applications.academy",
//             title: "Academy",
//             type: "item",
//             icon: "heroicons-outline:academic-cap",
//             url: "",
//           },
//           {
//             id: "Applications.calendar",
//             title: "Calendar",
//             type: "item",
//             icon: "heroicons-outline:calendar",
//             url: "",
//           },
//           {
//             id: "Applications.messenger",
//             title: "Messenger",
//             type: "item",
//             icon: "heroicons-outline:chat-alt",
//             url: "",
//           },
//           {
//             id: "Applications.Contacts",
//             title: "Contacts",
//             type: "item",
//             icon: "heroicons-outline:user-group",
//             url: "",
//           },
//           {
//             id: "Applications.Ecommerce",
//             title: "Ecommerce",
//             type: "collapse",
//             icon: "heroicons-outline:shopping-cart",
//             children: [
//               {
//                 id: "Applications.Ecommerce.Products",
//                 title: "Products",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.Ecommerce.ProductDetail",
//                 title: "Product Detail",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.Ecommerce.NewProduct",
//                 title: "New Product",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.Ecommerce.Orders",
//                 title: "Orders",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.Ecommerce.OrderDetail",
//                 title: "Order Detail",
//                 type: "item",
//                 url: "",
//               },
//             ],
//           },
//           {
//             id: "Applications.FileManager",
//             title: "File Manager",
//             type: "item",
//             icon: "heroicons-outline:cloud",
//             url: "",
//           },
//           {
//             id: "Applications.HelpCenter",
//             title: "Help Center",
//             type: "collapse",
//             icon: "heroicons-outline:support",
//             children: [
//               {
//                 id: "Applications.HelpCenter.Home",
//                 title: "Home",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.HelpCenter.FAQs",
//                 title: "FAQs",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.HelpCenter.Guides",
//                 title: "Guides",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Applications.HelpCenter.Support",
//                 title: "Support",
//                 type: "item",
//                 url: "",
//               },
//             ],
//           },
//           {
//             id: "Applications.Mail",
//             title: "Mail",
//             type: "item",
//             icon: "heroicons-outline:mail",
//             url: "",
//           },
//           {
//             id: "Applications.Notes",
//             title: "Notes",
//             type: "item",
//             icon: "heroicons-outline:pencil-alt",
//             url: "",
//           },
//           {
//             id: "Applications.Scrumboard",
//             title: "Scrumboard",
//             type: "item",
//             icon: "heroicons-outline:view-boards",
//             url: "",
//           },
//           {
//             id: "Applications.Tasks",
//             title: "Tasks",
//             subtitle: "12 tasks remaining",
//             type: "item",
//             icon: "heroicons-outline:check-circle",
//             url: "",
//           },
//           {
//             id: "Applications.Profile",
//             title: "Profile",
//             type: "item",
//             icon: "heroicons-outline:user",
//             url: "",
//           },
//           {
//             id: "Applications.Notifications",
//             title: "Notifications",
//             type: "item",
//             icon: "heroicons-outline:bell",
//             url: "",
//           },
//         ],
//       },
//       {
//         id: "Pages",
//         title: "PAGES",
//         subtitle: "Custom made page designs",
//         type: "group",

//         children: [
//           {
//             id: "Pages.Activities",
//             title: "Activities",
//             type: "item",
//             icon: "heroicons-outline:menu-alt-1",
//             url: "",
//           },
//           {
//             id: "Pages.Authentication",
//             title: "Authentication",
//             icon: "heroicons-outline:lock-closed",
//             type: "collapse",
//             children: [
//               {
//                 id: "Pages.Authentication.SignIn",
//                 title: "Sign In",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.SignIn.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignIn.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignIn.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignIn.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignIn.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignIn.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignIn.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//               {
//                 id: "Pages.Authentication.SignUp",
//                 title: "Sign Up",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.SignUp.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignUp.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignUp.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignUp.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignUp.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignUp.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignUp.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//               {
//                 id: "Pages.Authentication.SignOut",
//                 title: "Sign Out",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.SignOut.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignOut.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignOut.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignOut.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignOut.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignOut.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.SignOut.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//               {
//                 id: "Pages.Authentication.ForgotPassword",
//                 title: "Forgot Password",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.ForgotPassword.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ForgotPassword.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ForgotPassword.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ForgotPassword.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ForgotPassword.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ForgotPassword.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ForgotPassword.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//               {
//                 id: "Pages.Authentication.ResetPassword",
//                 title: "Reset Password",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.ResetPassword.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ResetPassword.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ResetPassword.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ResetPassword.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ResetPassword.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ResetPassword.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ResetPassword.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//               {
//                 id: "Pages.Authentication.UnlockSession",
//                 title: "Unlock session",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.UnlockSession.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.UnlockSession.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.UnlockSession.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.UnlockSession.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.UnlockSession.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.UnlockSession.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.UnlockSession.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//               {
//                 id: "Pages.Authentication.ConfirmationRequired",
//                 title: "Confirmation Required",
//                 type: "collapse",
//                 children: [
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.Classic",
//                     title: "Classic",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.Modern",
//                     title: "Modern",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.ModernReversed",
//                     title: "Modern Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.SplitScreen",
//                     title: "Split Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.SplitScreenReversed",
//                     title: "Split Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.FullScreen",
//                     title: "Full Screen",
//                     type: "item",
//                     url: "",
//                   },
//                   {
//                     id: "Pages.Authentication.ConfirmationRequired.FullScreenReversed",
//                     title: "Full Screen Reversed",
//                     type: "item",
//                     url: "",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             id: "Pages.ComingSoon",
//             title: "Coming Soon",
//             icon: "heroicons-outline:clock",
//             type: "collapse",
//             children: [
//               {
//                 id: "Pages.ComingSoon.Classic",
//                 title: "Classic",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.ComingSoon.Modern",
//                 title: "Modern",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.ComingSoon.ModernReversed",
//                 title: "Modern Reversed",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.ComingSoon.SplitScreen",
//                 title: "Split Screen",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.ComingSoon.SplitScreenReversed",
//                 title: "Split Screen Reversed",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.ComingSoon.FullScreen",
//                 title: "Full Screen",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.ComingSoon.FullScreenReversed",
//                 title: "Full Screen Reversed",
//                 type: "item",
//                 url: "",
//               },
//             ],
//           },
//           {
//             id: "Pages.Error",
//             title: "Error",
//             icon: "heroicons-outline:exclamation-circle",
//             type: "collapse",
//             children: [
//               {
//                 id: "Pages.Error.404",
//                 title: "404",
//                 type: "item",
//                 url: "",
//               },
//               {
//                 id: "Pages.Error.500",
//                 title: "500",
//                 type: "item",
//                 url: "",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

export default navigationConfig;
