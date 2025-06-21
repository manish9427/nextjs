import { useSelector, useDispatch } from 'react-redux';
import { setTitle } from '../redux/slices/headerSlice';

export default function Header() {
  const title = useSelector((state) => state.header.title);
  const dispatch = useDispatch();

  return (
    <header>
      <h1>{title}</h1>
      <button onClick={() => dispatch(setTitle('New Title'))}>Change Title</button>
    </header>
  );
}
