import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { addOrUpdateToCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { getCart as loadCart } from '../api/firebase';
import { removeFromCart as deleteFromCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const getCart = useQuery(['carts', uid || ''], () => loadCart(uid), {
    enabled: !!uid,
  });
  const addOrUpdateCart = useMutation(
    ({ product }) => addOrUpdateToCart(uid, product),
    { onSuccess: () => queryClient.invalidateQueries(['carts', uid]) }
  );
  const removeFromCart = useMutation(({ id }) => deleteFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(['carts', uid]),
  });
  return { getCart, addOrUpdateCart, removeFromCart };
}
