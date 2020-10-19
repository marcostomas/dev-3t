using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class Candidato
    {
        public Candidato()
        {
            Estagio = new HashSet<Estagio>();
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdCandidato { get; set; }
        public string NomeCompleto { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Telefone { get; set; }
        public string LinkLinkedinCandidato { get; set; }
        public string Area { get; set; }
        public int? IdCurso { get; set; }
        public int? IdUsuario { get; set; }

        public Curso IdCursoNavigation { get; set; }
        public Usuario IdUsuarioNavigation { get; set; }
        public ICollection<Estagio> Estagio { get; set; }
        public ICollection<Inscricao> Inscricao { get; set; }
    }
}
