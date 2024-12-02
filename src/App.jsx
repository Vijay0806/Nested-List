import React from "react";
import NestedList from "./NestedList";
import "./App.css";

const nestedData = [
  {
    id: 1,
    label: "Applications",
    children: [
      {
        id: 2,
        label: "Productivity",
        children: [
          { id: 3, label: "Microsoft Word" },
          { id: 4, label: "Google Docs" },
          {id:5, label:'Trello'}
        ],
      },
      {
        id: 6,
        label: "Communication",
        children: [
          { id: 7, label: "Slack" },
          { id: 8, label: "Zoom" },
          { id: 9, label: "Whatsapp" }
        ],
      },
      {
        id: 10,
        label: "Entertainment",
        children: [
          { id: 11, label: "Netflix" },
          { id: 12, label: "Spotify" },
          { id: 13, label: "YouTube" }
        ],
      },
    ],
  },
  {
    id: 14,
    label: "Library",
    children: [
      {
        id: 15,
        label: "Fiction",
        children: [
          { id: 16, label: "The Great Gatsby" },
          { id: 17, label: "To Kill a Mockingbird" },
          {id:18, label:'1984'}
        ],
      },
      {
        id: 19,
        label: "Science Fiction",
        children: [
          { id: 20, label: "Dune" },
          { id: 21, label: "Neuromancer" },
          { id: 22, label: "Foundation" }
        ],
      },
      {
        id: 23,
        label: "Fantasy",
        children: [
          { id: 24, label: "Harry Potter" },
          { id: 25, label: "The Hobbit" },
          { id: 26, label: "The Name of the Wind" }
        ],
      },
    ],
  },
  {
    id: 27,
    label: "Applications",
    children: [
      {
        id: 28,
        label: "Hardware",
        children: [
          { id: 29, label: "CPU" },
          { id: 30, label: "GPU" },
          {id:31, label:'RAM'}
        ],
      },
      {
        id: 32,
        label: "Software",
        children: [
          { id: 33, label: "Windows" },
          { id: 34, label: "Linux" },
          { id: 35, label: "macOS" }
        ],
      },
      {
        id: 36,
        label: "Network",
        children: [
          { id: 37, label: "Router" },
          { id: 38, label: "Switch" },
          { id: 39, label: "Firewall" }
        ],
      },
      
    ],
  },
  {
    id: 40,
    label: "Users",
    children: [
      {
        id: 41,
        label: "Adam",
        // children: [
        //   { id: 42, label: "Microsoft Word" },
        //   { id: 43, label: "Google Docs" },
        //   {id:44, label:'Trello'}
        // ],
      },
      {
        id: 42,
        label: "Ghost",
        // children: [
        //   { id: 46, label: "Slack" },
        //   { id: 47, label: "Zoom" },
        //   { id: 48, label: "Whatsapp" }
        // ],
      },
      {
        id: 43,
        label: "Guest",
        children: [
          { id: 44, label: "Desktop" },
          { id: 45, label: "Documents" },
          { id: 46, label: "Downloads" },
          { id: 47, label: "Movies" },
          { id: 48, label: "Music" },
          { id: 49, label: "Pictures" },
          { id: 50, label: "Public" }
        ],
      },
      {
        id: 51,
        label: "Shared",
        // children: [
        //   { id: 58, label: "Netflix" },
        //   { id: 59, label: "Spotify" },
        //   { id: 60, label: "YouTube" }
        // ],
      },
      {
        id: 52,
        label: "Thing1",
        // children: [
        //   { id: 11, label: "Netflix" },
        //   { id: 12, label: "Spotify" },
        //   { id: 13, label: "YouTube" }
        // ],
      },
      {
        id: 53,
        label: "Things2",
        // children: [
        //   { id: 11, label: "Netflix" },
        //   { id: 12, label: "Spotify" },
        //   { id: 13, label: "YouTube" }
        // ],
      },
      {
        id: 54,
        label: "Tonyae",
        // children: [
        //   { id: 11, label: "Netflix" },
        //   { id: 12, label: "Spotify" },
        //   { id: 13, label: "YouTube" }
        // ],
      },
    ],
  },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Nested List component</h1>
      <NestedList data={nestedData} />
    </div>
  );
}

export default App;
