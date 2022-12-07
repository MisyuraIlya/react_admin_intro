// in src/App.tsx
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./pages/UserList";
import { PostList, PostEdit, PostCreate } from "./pages/PostList";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Hacking from '@mui/icons-material/PrivacyTip';
import Todo from '@mui/icons-material/PlaylistAddCheck';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Dashboard } from "./pages/Dashboard";
import { authProvider } from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
   <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
     <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate} icon={PostIcon} />
     <Resource name="users" list={UserList}  recordRepresentation="name" icon={UserIcon}/>

     <Resource name="Home" list={UserList}  recordRepresentation="name" icon={HomeIcon}/>
     <Resource name="To-doe" list={UserList}  recordRepresentation="name" icon={Todo}/>
     <Resource name="Hacking" list={UserList}  recordRepresentation="name" icon={Hacking}/>
     <Resource name="My Tool" list={UserList}  recordRepresentation="name" icon={ConstructionIcon}/>
   </Admin>
  );

export default App;