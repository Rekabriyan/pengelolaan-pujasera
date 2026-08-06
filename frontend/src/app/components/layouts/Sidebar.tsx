import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/orders">Orders</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
    </div>
  );
}