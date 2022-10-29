import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import Home from "./pages/Home";

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'fx3pnargdzjr',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'XK9hAS_c-tQHK5UcRKKF-wUZhCUz8nE9ExQ5-9MD5qA',
});

const App = () => {
  const [testEntries, setTestEntries] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // await client.getEntries({
      //   content_type: 'recipe',
      // })
      //   .then((response) => console.log(response.items))
      //   .catch(console.error);
      await client.getEntries({
        content_type: 'recipe',
        select: 'fields',
        'metadata.tags.sys.id[all]': 'categoryVegan',
      })
        .then((response) => console.log(response.items))
        .catch(console.error);
      // await client.getEntry('7ipsLOLMKdPJEpxGD0M8rJ')
      //   .then((entry) => console.log(entry))
      //   .catch(console.error);
    };

    fetchData();
  }, []);
  return (
    <div className="m-5 p-5">
        <Nav>
          <div className="flex space-x-2">
            <GiKnifeFork />
            <Logo to={"/"}>The Gentlemens Cookbook</Logo>
            </div>
          <Link to={"/login"} style={{textDecoration: 'none'}}><Button>Log in</Button></Link>
        </Nav>
        <Search />
      <Category />
      <Home />
    </div>
  );
};

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: space-between;
align-items: center;
svg {
  font-size: 2rem;
}
`

const Button = styled.button`
    background: linear-gradient(35deg, #6b6a6a, #313131);
    color: white;
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px;
    border-radius: 10px;
    outline: 0;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 10rem;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background 250ms;
    &:hover {
        background: linear-gradient(to right, #f27121, #e94057);
        font-weight: 800;
    }
`

export default App;
