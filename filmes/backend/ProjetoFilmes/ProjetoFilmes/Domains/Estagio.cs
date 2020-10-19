using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class Estagio
    {
        public int IdEstagio { get; set; }
        public DateTime DataCadastro { get; set; }
        public int PeriodoEstagio { get; set; }
        public int? IdCandidato { get; set; }
        public int? IdEmpresa { get; set; }

        public Candidato IdCandidatoNavigation { get; set; }
        public Empresa IdEmpresaNavigation { get; set; }
    }
}
