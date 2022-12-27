@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/dash-customer/dshb-mis-compras-consultor.css')}}">
@endpush
@section('page')
Mis Compras
@endsection
@section('content')
<div id="mis-compras-container">
					<div class="dshb-title-container">
						<h4>MIS COMPRAS</h4>

						<p class="actual-balance-container">
							Saldo actual: <span>$99863.2</span> dolares

							<a href="/dashboard-consultor/mis-compras/" class="btn-refrescar-saldo">Refrescar</a>
						</p>
					</div>

					<div id="mc-table-box">
						<div class="material-table-container" id="mis-compras-table-container"><div id="mis-compras-table_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="mis-compras-table_length"><label>Mostrar <select name="mis-compras-table_length" aria-controls="mis-compras-table" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> Registros</label></div><div id="mis-compras-table_filter" class="dataTables_filter"><label><input type="search" class="" placeholder="Buscar..." aria-controls="mis-compras-table"></label></div><table class="responsive-table dataTable no-footer dtr-inline" id="mis-compras-table" role="grid" aria-describedby="mis-compras-table_info" style="width: 1640px;">
								<thead>
									<tr role="row"><th class="tooltipped-delayed sorting_asc" data-position="top" data-tooltip="Id" tabindex="0" aria-controls="mis-compras-table" rowspan="1" colspan="1" style="width: 292px;" aria-sort="ascending" aria-label="Id: Activar para ordenar la columna de manera descendente">Id</th><th class="tooltipped-delayed sorting" data-position="top" data-tooltip="Referencia" tabindex="0" aria-controls="mis-compras-table" rowspan="1" colspan="1" style="width: 292px;" aria-label="Referencia: Activar para ordenar la columna de manera ascendente">Referencia</th><th class="tooltipped-delayed sorting" data-position="top" data-tooltip="Total" tabindex="0" aria-controls="mis-compras-table" rowspan="1" colspan="1" style="width: 292px;" aria-label="Total: Activar para ordenar la columna de manera ascendente">Total</th><th class="tooltipped-delayed sorting" data-position="top" data-tooltip="Estado" tabindex="0" aria-controls="mis-compras-table" rowspan="1" colspan="1" style="width: 292px;" aria-label="Estado: Activar para ordenar la columna de manera ascendente">Estado</th><th class="tooltipped-delayed sorting" data-position="top" data-tooltip="Fecha" tabindex="0" aria-controls="mis-compras-table" rowspan="1" colspan="1" style="width: 292px;" aria-label="Fecha: Activar para ordenar la columna de manera ascendente">Fecha</th></tr></thead>
								<tbody><tr class="odd"><td class="tooltipped-delayed dtr-control sorting_1" data-position="top" data-tooltip="98" tabindex="0">98</td><td class="tooltipped-delayed" data-position="top" data-tooltip="1-1649693496442-10"><b>1-1649693496442-10</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="$1"><b>1</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="Aprobado"><b>Aprobado</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="2022-04-11 11:12:25"><b>2022-04-11 11:12:25</b></td></tr><tr class="even"><td class="tooltipped-delayed dtr-control sorting_1" data-position="top" data-tooltip="99" tabindex="0">99</td><td class="tooltipped-delayed" data-position="top" data-tooltip="1-1649693740799-10"><b>1-1649693740799-10</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="$1"><b>1</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="Aprobado"><b>Aprobado</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="2022-04-11 11:16:03"><b>2022-04-11 11:16:03</b></td></tr><tr class="odd"><td class="tooltipped-delayed dtr-control sorting_1" data-position="top" data-tooltip="100" tabindex="0">100</td><td class="tooltipped-delayed" data-position="top" data-tooltip="20-1649694551332-9"><b>20-1649694551332-9</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="$20"><b>20</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="Aprobado"><b>Aprobado</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="2022-04-11 11:29:43"><b>2022-04-11 11:29:43</b></td></tr><tr class="even"><td class="tooltipped-delayed dtr-control sorting_1" data-position="top" data-tooltip="101" tabindex="0">101</td><td class="tooltipped-delayed" data-position="top" data-tooltip="1-1649694779552-10"><b>1-1649694779552-10</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="$1"><b>1</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="Aprobado"><b>Aprobado</b></td><td class="tooltipped-delayed" data-position="top" data-tooltip="2022-04-11 11:33:29"><b>2022-04-11 11:33:29</b></td></tr></tbody></table><div class="dataTables_info" id="mis-compras-table_info" role="status" aria-live="polite">1 al 4 de 4</div><div class="dataTables_paginate paging_simple_numbers" id="mis-compras-table_paginate"><a class="paginate_button previous disabled" aria-controls="mis-compras-table" data-dt-idx="0" tabindex="-1" id="mis-compras-table_previous"><a href="#" class="waves-effect btn-flat nopadding"><i class="material-icons small">chevron_left</i></a></a><span><a class="paginate_button current" aria-controls="mis-compras-table" data-dt-idx="1" tabindex="0">1</a></span><a class="paginate_button next disabled" aria-controls="mis-compras-table" data-dt-idx="2" tabindex="-1" id="mis-compras-table_next"><a href="#" class="waves-effect btn-flat nopadding"><i class="material-icons small">chevron_right</i></a></a></div></div></div>
					</div>

					<div id="btn-comprar-paq">
						<a href="/dashboard-consultor/paquetes/">
							<span>
								<img src="/src/img/dashboard/i-chat.svg" alt="">
							</span>
							<span>
								Comprar paquetes
							</span>
						</a>
					</div>
				</div>
@endsection
@push('scripts_footer')
    @include('customer.viewMisCompras.scripts')
@endpush
