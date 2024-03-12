import { useEffect, useState } from "react";

export const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_HOST)
      .then((r) => r.json())
      .then((data) => setFriends(data))
      .catch(() => setFriends([]));
  }, [setFriends]);
  return (
    <div>
      <h2>Amigos</h2>
      {friends.map((friend) => (
        <div key={friend.id}>
          <p>{friend.name}</p>
        </div>
      ))}
    </div>
  );
};
