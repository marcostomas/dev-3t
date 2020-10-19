using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Candidato = new HashSet<Candidato>();
            Empresa = new HashSet<Empresa>();
        }

        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public int? IdTipoUsuario { get; set; }

        public TipoUsuario IdTipoUsuarioNavigation { get; set; }
        public ICollection<Candidato> Candidato { get; set; }
        public ICollection<Empresa> Empresa { get; set; }
    }
}
