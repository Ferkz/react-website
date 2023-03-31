import './navbar.css'
function NavBar(){
    return(
        <nav class="nav-bar">
            <a class="nav-bar-item" href="#sobre">About</a>
            <a class="nav-bar-item" href="#soft-skill">Soft Skills</a>
            <a class="nav-bar-item" href="#">Projects</a>
            <input type="text" name="pesquisar" id="pesquisar" placeholder="Search..."/>        
        </nav>
    )
}

export default NavBar