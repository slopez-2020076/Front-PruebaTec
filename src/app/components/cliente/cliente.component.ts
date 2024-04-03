import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../models/cliente';
import { ClienteRestService } from '../../services/clienteRest/cliente-rest.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private clienteRest: ClienteRestService
  ){
    this.cliente = new ClienteModel(0,'','','','','','','',false);
  }

  public ngOnInit(): void {
    /*this.getClientes();*/
  }

  clientes: any;
  cliente:ClienteModel;
  clienteUpdate: any;
  clienteDelete: any;
  uriClientes:any;


  saveCliente(saveClienteForm: any) {
    this.clienteRest.saveClient(this.cliente).subscribe
      ({
        next: (res: any) => {
          saveClienteForm.reset();
        },
        error: (err: any) => {

          saveClienteForm.reset();
        },
      })
      saveClienteForm.reset();
  }
/*
  getUser(id: string) {
    this.userRest.getUser(id).subscribe({
      next: (res: any) => {
        this.userView = res.user;
        this.userUpdate = res.user;
        this.userDelete = res.user;
        this.userDeleteModal = res.user;
        this.userImage = res.user.image
        this.uri = environment.baseURI + 'user/getImageUser/' + this.userImage;
        console.log(this.userView)
      },
      error: (err) => { alert(err.error.message) }
    })
  }
  */
/*
  updateUser() {
    this.userUpdate.password = undefined;
    this.userRest.updateUser(this.userUpdate._id, this.userUpdate).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.message,
          confirmButtonColor: '#28B463'
        });
        this.getUsers();
        if (this.showTableUsers === true) {
          this.showButtonActions(this.userUpdate._id, false)
        }
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error.message || err.error,
          confirmButtonColor: '#E74C3C'
        });
      },
    })
  }

  deleteUser(id: string, password: string) {
    Swal.fire({
      title: 'Do you want to delete this User?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      
      if (result.isConfirmed) {
        const params = {
          password: password
        }
        console.log(params)
        this.userRest.deleteUser(id, params).subscribe({
          next: (res: any) => {
            Swal.fire({
              title: res.message,
              icon: 'success',
              position: 'center',
              showConfirmButton: false,
              timer: 2000
            });
            this.getUsers();
            if (this.showTableUsers === true) {
              this.showButtonActions(this.userUpdate._id, false)
            }
            this.userDeletePassword = "";
          },
          error: (err) => {
          Swal.fire({
            title: err.error.message||err.error,
            icon: 'error',
            position: 'center',
            timer: 3000
          }),
          this.userDeletePassword = "";
          if (this.showTableUsers === true) {
            this.showButtonActions(this.userUpdate._id, false)
          };
        }

        })
        this.getUsers();
      } else if (result.isDenied) {
        Swal.fire('User Not Deleted', '', 'info')
        this.userDeletePassword = "";
      }
    })
    this.userDeletePassword = "";
  }*/

}
