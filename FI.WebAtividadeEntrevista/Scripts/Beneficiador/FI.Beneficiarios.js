function ModalBeneficiario() {

    var texto = '<div id="Beneficiario" class="modal fade">                                                                                                                     ' +
        '        <div class="modal-dialog">                                                                                                                                     ' +
        '            <div class="modal-content">                                                                                                                                ' +
        '                <div class="modal-header">                                                                                                                             ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>                                                             ' +
        '                    <h4 class="modal-title">' + 'Beneficiários' + '</h4>                                                                                               ' +
        '                </div>                                                                                                                                                 ' +
        '                <div class="modal-body">                                                                                                                               ' +
        '                    <p>                                                                                                                                                ' +
        '                       <div class="row"  style="display:flex; align-items:end;">                                                                                       ' +
        '                           <div class="col-md-4">                                                                                                                      ' +
        '                               <div class="form-group">                                                                                                                ' +
        '                                   <label for="CPFBeneficiario">CPF:</label>                                                                                                       ' +
        '                                   <input required="required" type="text" class="form-control" id="CPFBeneficiario" name="CPF" placeholder="Ex.: 010.011.111-00" maxlength="14">   ' +
        '                               </div>                                                                                                                                  ' +
        '                           </div >                                                                                                                                     ' +
        '                           <div class="col-md-6">                                                                                                                      ' +
        '                               <div class="form-group">                                                                                                                ' +
        '                                   <label for="Nome">Nome:</label>                                                                                                     ' +
        '                                   <input required="required" type="text" class="form-control" id="Nome" name="Nome" placeholder="Ex.: João" maxlength="50">           ' +
        '                               </div>                                                                                                                                  ' +
        '                           </div >                                                                                                                                     ' +
        '                           <div class="col-md-2">                                                                                                                      ' +
        '                               <div class="form-group">                                                                                                                ' +
        '                                   <button type="submit" class="btn btn-sm btn-success" style="height:33px; width:68px">Incluir</button>                               ' +
        '                               </div>                                                                                                                                  ' +
        '                           </div>                                                                                                                                      ' +
        '                       </div >                                                                                                                                         ' +
        '                       <div class="row">                                                                                                                               ' +
        '                           <div class="col-md-12">                                                                                                                     ' +
        '                               <div class="form-group">                                                                                                                ' +
        '                                   <table id="gridBeneficiarios" class="table">                                                                                        ' +
        '                                       <tr>                                                                                                                            ' +
        '                                           <th style="padding-left: 1px;">CPF</th>                                                                                     ' +
        '                                           <th>Nome</th>                                                                                                               ' +
        '                                           <th></th>                                                                                                                   ' +
        '                                       </tr>                                                                                                                           ' +
        '                                       @foreach (var item in Model)                                                                                                    ' +
        '                                       {                                                                                                                               ' +
        '                                           <tr>                                                                                                                        ' +
        '                                               <td data-th="Data">@Html.DisplayFor( modelItem => item.CPF )</td>                                                       ' +
        '                                               <td data-th="Status">@Html.DisplayFor( modelItem => item.Nome )</td>                                                    ' +
        '                                           </tr>                                                                                                                       ' +
        '                                       }                                                                                                                               ' +
        '                                   </table>                                                                                                                            ' +
        '                               </div>                                                                                                                                  ' +
        '                           </div>                                                                                                                                      ' +
        '                       </div >                                                                                                                                         ' +
        '                    </p>                                                                                                                                               ' +
        '                </div>                                                                                                                                                 ' +
        '                <div class="modal-footer">                                                                                                                             ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>                                                                 ' +
        '                                                                                                                                                                       ' +
        '                </div>                                                                                                                                                 ' +
        '            </div><!-- /.modal-content -->                                                                                                                             ' +
        '  </div><!-- /.modal-dialog -->                                                                                                                                        ' +
        '</div> <!-- /.modal -->                                                                                                                                                ';

    $('body').append(texto);
}

function Mask() {

    idcss('CPFBeneficiario').setAttribute('maxlength', 14);
    idcss('CPFBeneficiario').onkeypress = function () {
        mask(this, maskcpf);
    }
}

function AbrirModalBeneficiario() {

    Mask();
    $('#Beneficiario').modal('show');
}