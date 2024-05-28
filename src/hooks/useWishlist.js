import { useEffect, useState } from "react";

export default function useWishlist() {
  const [wishIds, setWishIds] = useState([]);

  useEffect(() => {
    const wishlist = localStorage.getItem("wishlist");

    if (wishlist) setWishIds(JSON.parse(wishlist));
  }, []);

  const isWish = (id) => wishIds.includes(parseInt(id));

  const handleWishlist = (id) => {
    const idExists = isWish(id);
    const updatedWishlist = idExists
      ? wishIds.filter((wishID) => parseInt(id) !== parseInt(wishID))
      : [...wishIds, parseInt(id)];

    setWishIds(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return {
    wishIds,
    isWish,
    handleWishlist,
  };
}
