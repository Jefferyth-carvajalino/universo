@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
@endpush
@section('page')
Perfil
@endsection
@section('content')
<div id="perfil-container">
					<div>
						<div id="information-account-container">
							<h5>PERFIL</h5>

							<form>
								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>INFORMACIÓN DE LA CUENTA</h6>

										<p>Para administrar tu foto de perfil, ten presente que solo se permiten archivos en formato: <br> .jpg, .jpeg y .png</p>
									</div>

									<div class="form-field-clearfix">
										<div class="form-field">
											<input type="text" class="afbgd-custom-input" id="username">

											<label for="username" class="on-focus">NOMBRE DE USUARIO (En pantalla) *</label>

											<div class="input-msg">
												<!-- <p>Ingresa tu segundo nombre</p> -->
											</div>
										</div>
									</div>

									<div class="form-field">
										<div class="dropify-wrapper has-preview"><div class="dropify-message"><span class="file-icon"></span> <p>Arrastra y suelta una imagen aquí o haz click</p><p class="dropify-error">Ooops, ha ocurrido un error.</p></div><div class="dropify-loader" style="display: none;"></div><div class="dropify-errors-container"><ul></ul></div><input type="file" id="foto-perfil" class="dropify" data-default-file="/src/img/user-default.png"><button type="button" class="dropify-clear">Eliminar</button><div class="dropify-preview" style="display: block;"><span class="dropify-render"><img src="/src/img/user-default.png"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner">user-default.png</span></p><p class="dropify-infos-message">Arrastra y suelta o haz click para reemplazar la imagen</p></div></div></div></div>

										<label for="foto-perfil">FOTO DE PERFIL *</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>INFORMACIÓN PERSONAL</h6>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input uppercased" id="name">

										<label for="name" class="on-focus">NOMBRE COMPLETO *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="email">

										<label for="email" class="on-focus">CORREO ELECTRÓNICO *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="cellphone">

										<label for="cellphone" class="on-focus">TELÉFONO MOVIL *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="date" class="afbgd-custom-input" id="birthdate">

										<label for="birthdate" class="on-focus">FECHA DE NACIMIENTO *</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>UBICACIÓN</h6>
									</div>

									<div class="form-field">
										<select class="afbgd-custom-input" id="location"><option value="seleccionar">-- Seleccionar --</option><option value="1" data-name="Afganistán">Afganistán</option><option value="2" data-name="Aland Islands">Aland Islands</option><option value="3" data-name="Albania">Albania</option><option value="82" data-name="Alemania">Alemania</option><option value="6" data-name="Andorra">Andorra</option><option value="7" data-name="Angola">Angola</option><option value="8" data-name="Anguilla">Anguilla</option><option value="9" data-name="Antártida">Antártida</option><option value="10" data-name="Antigua y Barbuda	">Antigua y Barbuda	</option><option value="156" data-name="Antillas Holandesas	">Antillas Holandesas	</option><option value="194" data-name="Arabia Saudita	">Arabia Saudita	</option><option value="4" data-name="Argelia">Argelia</option><option value="11" data-name="Argentina">Argentina</option><option value="12" data-name="Armenia">Armenia</option><option value="13" data-name="Aruba">Aruba</option><option value="14" data-name="Australia">Australia</option><option value="15" data-name="Austria">Austria</option><option value="16" data-name="Azerbaiyán">Azerbaiyán</option><option value="17" data-name="Bahamas ">Bahamas </option><option value="18" data-name="Bahrain">Bahrain</option><option value="19" data-name="Bangladesh">Bangladesh</option><option value="20" data-name="Barbados">Barbados</option><option value="22" data-name="Bélgica">Bélgica</option><option value="23" data-name="Belice">Belice</option><option value="24" data-name="Benín">Benín</option><option value="25" data-name="Bermudas">Bermudas</option><option value="21" data-name="Bielorrusia">Bielorrusia</option><option value="27" data-name="Bolivia">Bolivia</option><option value="28" data-name="Bosnia-Herzegovina	">Bosnia-Herzegovina	</option><option value="29" data-name="Botsuana">Botsuana</option><option value="30" data-name="Bouvet Island">Bouvet Island</option><option value="31" data-name="Brasil">Brasil</option><option value="32" data-name="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="33" data-name="Brunei">Brunei</option><option value="34" data-name="Bulgaria">Bulgaria</option><option value="35" data-name="Burkina Faso">Burkina Faso</option><option value="36" data-name="Burundi">Burundi</option><option value="26" data-name="Bután">Bután</option><option value="40" data-name="Cabo Verde	">Cabo Verde	</option><option value="37" data-name="Camboya">Camboya</option><option value="38" data-name="Camerún">Camerún</option><option value="39" data-name="Canadá">Canadá</option><option value="43" data-name="Chad">Chad</option><option value="44" data-name="Chile">Chile</option><option value="45" data-name="China">China</option><option value="57" data-name="Chipre">Chipre</option><option value="48" data-name="Colombia">Colombia</option><option value="49" data-name="Comoros">Comoros</option><option value="50" data-name="Congo">Congo</option><option value="115" data-name="Corea del Norte	">Corea del Norte	</option><option value="116" data-name="Corea del Sur	">Corea del Sur	</option><option value="54" data-name="Costa de Marfil	">Costa de Marfil	</option><option value="53" data-name="Costa Rica">Costa Rica</option><option value="55" data-name="Croacia">Croacia</option><option value="56" data-name="Cuba">Cuba</option><option value="249" data-name="Curaçao">Curaçao</option><option value="59" data-name="Dinamarca	">Dinamarca	</option><option value="60" data-name="Djibouti, Yibuti	">Djibouti, Yibuti	</option><option value="61" data-name="Dominica">Dominica</option><option value="62" data-name="Dominicana, República	">Dominicana, República	</option><option value="64" data-name="Ecuador">Ecuador</option><option value="65" data-name="Egipto">Egipto</option><option value="66" data-name="El Salvador">El Salvador</option><option value="231" data-name="Emiratos Árabes Unidos	">Emiratos Árabes Unidos	</option><option value="68" data-name="Eritrea	">Eritrea	</option><option value="200" data-name="Eslovaquia">Eslovaquia</option><option value="201" data-name="Eslovenia">Eslovenia</option><option value="207" data-name="España">España</option><option value="233" data-name="Estados Unidos	">Estados Unidos	</option><option value="69" data-name="Estonia">Estonia</option><option value="70" data-name="Etiopía">Etiopía</option><option value="174" data-name="Filipinas">Filipinas</option><option value="74" data-name="Finlandia">Finlandia</option><option value="73" data-name="Fiyi">Fiyi</option><option value="75" data-name="Francia">Francia</option><option value="79" data-name="Gabón">Gabón</option><option value="80" data-name="Gambia">Gambia</option><option value="81" data-name="Georgia">Georgia</option><option value="83" data-name="Ghana">Ghana</option><option value="84" data-name="Gibraltar">Gibraltar</option><option value="87" data-name="Granada">Granada</option><option value="85" data-name="Grecia">Grecia</option><option value="86" data-name="Groenlandia">Groenlandia</option><option value="88" data-name="Guadalupe">Guadalupe</option><option value="89" data-name="Guam">Guam</option><option value="90" data-name="Guatemala">Guatemala</option><option value="76" data-name="Guayana Francesa	">Guayana Francesa	</option><option value="91" data-name="Guernsey and Alderney">Guernsey and Alderney</option><option value="93" data-name="Guinea Bissau	">Guinea Bissau	</option><option value="67" data-name="Guinea Ecuatorial	">Guinea Ecuatorial	</option><option value="94" data-name="Guyana">Guyana</option><option value="95" data-name="Haiti">Haiti</option><option value="96" data-name="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="97" data-name="Honduras">Honduras</option><option value="98" data-name="Hong Kong S.A.R.">Hong Kong S.A.R.</option><option value="99" data-name="Hungría">Hungría</option><option value="101" data-name="India">India</option><option value="102" data-name="Indonesia">Indonesia</option><option value="103" data-name="Iran">Iran</option><option value="104" data-name="Iraq">Iraq</option><option value="105" data-name="Irlanda">Irlanda</option><option value="46" data-name="Isla de Navidad, Isla Christmas	">Isla de Navidad, Isla Christmas	</option><option value="175" data-name="Isla Pitcairn	">Isla Pitcairn	</option><option value="100" data-name="Islandia">Islandia</option><option value="41" data-name="Islas Caimán	">Islas Caimán	</option><option value="47" data-name="Islas Cocos	">Islas Cocos	</option><option value="52" data-name="Islas Cook	">Islas Cook	</option><option value="72" data-name="Islas Feroe	">Islas Feroe	</option><option value="71" data-name="Islas Malvinas	">Islas Malvinas	</option><option value="137" data-name="Islas Marshall	">Islas Marshall	</option><option value="202" data-name="Islas Salomón	">Islas Salomón	</option><option value="227" data-name="Islas Turcas y Caicos	">Islas Turcas y Caicos	</option><option value="242" data-name="Islas Virgenes Americanas	">Islas Virgenes Americanas	</option><option value="241" data-name="Islas Virgenes Británicas	">Islas Virgenes Británicas	</option><option value="106" data-name="Israel">Israel</option><option value="107" data-name="Italia">Italia</option><option value="108" data-name="Jamaica">Jamaica</option><option value="109" data-name="Japón">Japón</option><option value="110" data-name="Jersey">Jersey</option><option value="111" data-name="Jordania">Jordania</option><option value="112" data-name="Kazajstán">Kazajstán</option><option value="113" data-name="Kenia">Kenia</option><option value="118" data-name="Kirguistán">Kirguistán</option><option value="114" data-name="Kiribati">Kiribati</option><option value="248" data-name="Kosovo">Kosovo</option><option value="117" data-name="Kuwait">Kuwait</option><option value="119" data-name="Laos">Laos</option><option value="120" data-name="Latvia">Latvia</option><option value="121" data-name="Lebanon">Lebanon</option><option value="122" data-name="Lesotho">Lesotho</option><option value="123" data-name="Liberia">Liberia</option><option value="124" data-name="Libia">Libia</option><option value="125" data-name="Liechtenstein">Liechtenstein</option><option value="126" data-name="Lithuania">Lithuania</option><option value="127" data-name="Luxembourg">Luxembourg</option><option value="128" data-name="Macao">Macao</option><option value="129" data-name="Macedonia">Macedonia</option><option value="130" data-name="Madagascar">Madagascar</option><option value="131" data-name="Malawi">Malawi</option><option value="132" data-name="Malaysia">Malaysia</option><option value="133" data-name="Maldivas">Maldivas</option><option value="134" data-name="Mali">Mali</option><option value="135" data-name="Malta">Malta</option><option value="136" data-name="Man (Isle of)">Man (Isle of)</option><option value="164" data-name="Marianas del Norte	">Marianas del Norte	</option><option value="149" data-name="Marruecos">Marruecos</option><option value="138" data-name="Martinica">Martinica</option><option value="139" data-name="Mauritania">Mauritania</option><option value="140" data-name="Mauritius">Mauritius</option><option value="141" data-name="Mayotte">Mayotte</option><option value="142" data-name="México">México</option><option value="143" data-name="Micronesia">Micronesia</option><option value="144" data-name="Moldavia">Moldavia</option><option value="145" data-name="Monaco">Monaco</option><option value="146" data-name="Mongolia">Mongolia</option><option value="147" data-name="Montenegro">Montenegro</option><option value="148" data-name="Montserrat">Montserrat</option><option value="150" data-name="Mozambique">Mozambique</option><option value="151" data-name="Myanmar">Myanmar</option><option value="152" data-name="Namibia">Namibia</option><option value="153" data-name="Nauru">Nauru</option><option value="154" data-name="Nepal">Nepal</option><option value="159" data-name="Nicaragua">Nicaragua</option><option value="160" data-name="Niger">Niger</option><option value="161" data-name="Nigeria">Nigeria</option><option value="162" data-name="Niue">Niue</option><option value="163" data-name="Norfolk Island">Norfolk Island</option><option value="165" data-name="Noruega">Noruega</option><option value="157" data-name="Nueva Caledonia	">Nueva Caledonia	</option><option value="158" data-name="Nueva Zelanda	">Nueva Zelanda	</option><option value="166" data-name="Oman">Oman</option><option value="155" data-name="Países Bajos, Holanda	">Países Bajos, Holanda	</option><option value="167" data-name="Pakistan">Pakistan</option><option value="168" data-name="Palau">Palau</option><option value="170" data-name="Panama">Panama</option><option value="171" data-name="Papúa-Nueva Guinea	">Papúa-Nueva Guinea	</option><option value="172" data-name="Paraguay">Paraguay</option><option value="173" data-name="Peru">Peru</option><option value="77" data-name="Polinesia Francesa	">Polinesia Francesa	</option><option value="176" data-name="Polonia">Polonia</option><option value="177" data-name="Portugal">Portugal</option><option value="178" data-name="Puerto Rico">Puerto Rico</option><option value="179" data-name="Qatar">Qatar</option><option value="232" data-name="Reino Unido	">Reino Unido	</option><option value="42" data-name="República Centroafricana	">República Centroafricana	</option><option value="58" data-name="República Checa	">República Checa	</option><option value="51" data-name="República Democrática del Congo	">República Democrática del Congo	</option><option value="92" data-name="República Guinea	">República Guinea	</option><option value="180" data-name="Reunion">Reunion</option><option value="183" data-name="Ruanda">Ruanda</option><option value="181" data-name="Rumanía">Rumanía</option><option value="182" data-name="Russia">Russia</option><option value="244" data-name="Sáhara Occidental	">Sáhara Occidental	</option><option value="187" data-name="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="189" data-name="Saint-Barthelemy">Saint-Barthelemy</option><option value="190" data-name="Saint-Martin (French part)">Saint-Martin (French part)</option><option value="191" data-name="Samoa">Samoa</option><option value="5" data-name="Samoa Americana	">Samoa Americana	</option><option value="185" data-name="San Cristobal y Nevis	">San Cristobal y Nevis	</option><option value="192" data-name="San Marino">San Marino</option><option value="188" data-name="San Vincente y Granadinas	">San Vincente y Granadinas	</option><option value="184" data-name="Santa Helena">Santa Helena</option><option value="186" data-name="Santa Lucía	">Santa Lucía	</option><option value="193" data-name="Sao Tome and Principe">Sao Tome and Principe</option><option value="195" data-name="Senegal">Senegal</option><option value="196" data-name="Serbia">Serbia</option><option value="197" data-name="Seychelles">Seychelles</option><option value="198" data-name="Sierra Leone">Sierra Leone</option><option value="199" data-name="Singapur">Singapur</option><option value="250" data-name="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option><option value="203" data-name="Somalia">Somalia</option><option value="206" data-name="South Sudan">South Sudan</option><option value="208" data-name="Sri Lanka	">Sri Lanka	</option><option value="212" data-name="Suazilandia">Suazilandia</option><option value="204" data-name="Sudáfrica">Sudáfrica</option><option value="209" data-name="Sudan">Sudan</option><option value="205" data-name="Sudán del Sur	">Sudán del Sur	</option><option value="213" data-name="Suecia">Suecia</option><option value="214" data-name="Suiza	">Suiza	</option><option value="210" data-name="Surinam	">Surinam	</option><option value="211" data-name="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option><option value="215" data-name="Syria">Syria</option><option value="217" data-name="Tadjikistan">Tadjikistan</option><option value="219" data-name="Tailandia">Tailandia</option><option value="216" data-name="Taiwan">Taiwan</option><option value="218" data-name="Tanzania">Tanzania</option><option value="169" data-name="Territorios Palestinos	">Territorios Palestinos	</option><option value="78" data-name="Tierras Australes y Antárticas Francesas	">Tierras Australes y Antárticas Francesas	</option><option value="63" data-name="Timor Oriental	">Timor Oriental	</option><option value="220" data-name="Togo">Togo</option><option value="221" data-name="Tokelau">Tokelau</option><option value="222" data-name="Tonga">Tonga</option><option value="223" data-name="Trinidad y Tobago	">Trinidad y Tobago	</option><option value="224" data-name="Túnez">Túnez</option><option value="226" data-name="Turkmenistan">Turkmenistan</option><option value="225" data-name="Turquía">Turquía</option><option value="228" data-name="Tuvalu">Tuvalu</option><option value="230" data-name="Ucrania">Ucrania</option><option value="229" data-name="Uganda">Uganda</option><option value="234" data-name="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="235" data-name="Uruguay">Uruguay</option><option value="236" data-name="Uzbekistan">Uzbekistan</option><option value="237" data-name="Vanuatu">Vanuatu</option><option value="238" data-name="Vatican City State (Holy See)">Vatican City State (Holy See)</option><option value="239" data-name="Venezuela">Venezuela</option><option value="240" data-name="Vietnam">Vietnam</option><option value="243" data-name="Wallis y Futuna	">Wallis y Futuna	</option><option value="245" data-name="Yemen">Yemen</option><option value="246" data-name="Zambia">Zambia</option><option value="247" data-name="Zimbabwe">Zimbabwe</option></select>

										<label for="location" class="on-focus">UBICACIÓN *</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-submit-section">
									<a href="#" class="fsbtn-secondary" id="btn-descartar">
										<span class="fsbtn-text">
											DESCARTAR CAMBIOS
										</span>
									</a>

									<a href="#" class="fsbtn-primary" id="btn-update">
										<span class="fsbtn-icon">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#ffffff" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"></path>
											</svg>
										</span>

										<span class="fsbtn-text">
											GUARDAR CAMBIOS
										</span>
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
@endsection
@push('scripts_footer')
    @include('customer.viewPerfil.scripts')
@endpush
