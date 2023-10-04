// import { useState, useEffect, useRef } from 'react';

// function Drower() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const drawerRef = useRef(null);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const closeDrawer = (e) => {
//     if (isDrawerOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
//       setIsDrawerOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('click', closeDrawer);
//     return () => {
//       window.removeEventListener('click', closeDrawer);
//     };
//   }, [isDrawerOpen]);

//   return (
//     <div className="drawer" ref={drawerRef}>
//       <input
//         id="my-drawer"
//         type="checkbox"
//         className="drawer-toggle"
//         checked={isDrawerOpen}
//         onChange={toggleDrawer}
//       />
//       <div className="drawer-content">
//         {/* Page content here */}
//         <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
//           {isDrawerOpen ? 'Close drawer' : 'Open drawer'}
//         </label>
//       </div>
//       {isDrawerOpen && (
//         <div className="drawer-side">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
//             {/* Sidebar content here */}
//             <li>
//               <a href="#">Sidebar Item 1</a>
//             </li>
//             <li>
//               <a href="#">Sidebar Item 2</a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Drower;
