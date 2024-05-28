import { useEffect, useState } from "react";

export default function useWishlist() {
  const [wishIds, setWishIds] = useState([]);

  useEffect(() => {
    const wishlist = localStorage.getItem("wishlist");

    if (wishlist) setWishIds(JSON.parse(wishlist));
  }, []);

  const isWish = (id) => wishIds.includes(id);

  const handleWishlist = (id) => {
    const updatedWishlist = wishIds.includes(id)
      ? wishIds.filter((wishID) => id !== wishID)
      : [...wishIds, id];
    setWishIds(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return {
    wishIds,
    isWish,
    handleWishlist,
  };
}
