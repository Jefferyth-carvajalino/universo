<li class="nav-item">
    <a href="{{ route('dashboard.clientes.index') }}"
       class="nav-link {{ Request::is('clientes*') ? 'active' : '' }}">
        <p>Clientes</p>
    </a>
</li>


<li class="nav-item">
    <a href="{{ route('dashboard.users.index') }}"
       class="nav-link {{ Request::is('users*') ? 'active' : '' }}">
        <p>Users</p>
    </a>
</li>


