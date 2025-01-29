smooth
className="nav-link"
onMouseEnter={() => handleMouseEnter("/projects")}
>
<i className="fas fa-briefcase"></i> Projects
</NavLink>
</li>
<li>
<NavLink
to="/skills"
smooth
className="nav-link"
onMouseEnter={() => handleMouseEnter("/skills")}
>
<i className="fas fa-cogs"></i> Skills
</NavLink>
</li>
<li>
<NavLink
to="/education"
smooth
className="nav-link"
onMouseEnter={() => handleMouseEnter("/education")}
>
<i className="fas fa-graduation-cap"></i> Education
</NavLink>
</li>
<li>
<NavLink
to="/contact"
smooth
className="nav-link"
onMouseEnter={() => handleMouseEnter("/contact")}
>
<i className="fas fa-envelope"></i> Contact Me
</NavLink>
</li>
</ul>
</nav>
);
};

export default Navbar;