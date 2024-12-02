// import React, { useState } from "react";

// const NestedList = ({ data }) => {
//   const [expanded, setExpanded] = useState({});

//   // Toggle expand/collapse state for a node
//   const toggleExpand = (id) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   // Recursive function to render the list
//   const renderList = (items, level = 0) => {
//     return (
//       <ul style={{ paddingLeft: `${level * 20}px` }}>
//         {items.map((item) => (
//           <li key={item.id}>
//             <div
//               onClick={() => toggleExpand(item.id)}
//               style={{
//                 cursor: item.children ? "pointer" : "default",
//                 fontWeight: item.children ? "bold" : "normal",
//               }}
//             >
//               {item.label}
//             </div>
//             {item.children && expanded[item.id] && renderList(item.children, level + 1)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return <div>{renderList(data)}</div>;
// };

// export default NestedList;
// import React, { useState } from "react";

// const NestedList = ({ data }) => {
//   const [expanded, setExpanded] = useState({}); // Keeps track of expanded items

//   const handleToggle = (id) => {
//     // Toggle the state for the clicked item
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const renderList = (items) => {
//     return (
//       <ul>
//         {items.map((item) => (
//           <li
//             key={item.id}
//             className={`nested-list-item ${expanded[item.id] ? "active" : ""}`}
//           >
//             <div onClick={() => handleToggle(item.id)}>{item.label}</div>
//             {item.children && expanded[item.id] && renderList(item.children)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return <div className="nested-list">{renderList(data)}</div>;
// };

// export default NestedList;

import React, { useState } from "react";

const NestedList = ({ data }) => {
  const [expanded, setExpanded] = useState({}); // Track expanded items

  const handleToggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderList = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className={`nested-list-item ${expanded[item.id] ? "active" : ""}`}
          >
            <div onClick={() => handleToggle(item.id)}>{item.label}</div>
            {item.children && expanded[item.id] && renderList(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="nested-list">{renderList(data)}</div>;
};

export default NestedList;
