import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (

        <div className="sidebar">
            <img
                className="sidebar_logo"
                src="https://i.pinimg.com/originals/f0/5c/bc/f05cbc8c0f8b075d2b4f1f68fee49649.jpg"
                alt=""
            />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />


            <br />
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr />


            {playlists?.items?.map(playlists => (
                <SidebarOption title={playlists.name} />
            ))}
            <SidebarOption title='hip hop' />
            <SidebarOption title='Rock' />
            <SidebarOption title='porno' />
        </div>

    )
}

export default Sidebar