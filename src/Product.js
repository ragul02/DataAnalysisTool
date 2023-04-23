import React, { useState, useEffect } from "react";
import "./Product.css";

const Product = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Fetch chat data from API source

    fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("product,", data);
        setChats(data);
      })
      .catch((error) => {
        console.error("Failed to fetch chat data:", error);
      });
  }, []);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter chats based on chat title or order ID
  const filteredChats = chats.filter((chat) => {
    return (
      chat.title.toLowerCase().includes(filter.toLowerCase()) ||
      chat.orderId.includes(filter)
    );
  });

  return (
    <div>
      <div>
        <h2>Filter by Title/Order ID</h2>
        <input
          type="text"
          placeholder="Search typing to search"
          onChange={handleFilterChange}
        />
      </div>

      <ul>
        {filteredChats.map((chat) => (
          <li
            key={chat.id}
            onClick={() => handleChatClick(chat)}
            className={
              selectedChat && selectedChat.id === chat.id ? "selected" : ""
            }
          >
            <div className="image">
              <img src={chat.imageURL} alt="Product" />
            </div>
            <div className="order_div">
                
              <h4>{chat.title}</h4>
              <p>Order ID: {chat.orderId}</p>
              <p>{chat.messageList[0]?.message}</p>
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).format(chat.latestMessageTimestampt)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
