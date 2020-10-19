using System;
using System.Collections.Generic;

namespace ProjetoFilmes.Domains
{
    public partial class Vaga
    {
        public Vaga()
        {
            Inscricao = new HashSet<Inscricao>();
            VagaTecnologia = new HashSet<VagaTecnologia>();
        }

        public int IdVaga { get; set; }
        public string DescricaoVaga { get; set; }
        public string DescricaoEmpresa { get; set; }
        public string DescricaoBeneficio { get; set; }
        public DateTime DataPublicacao { get; set; }
        public DateTime DataExpiracao { get; set; }
        public string Experiencia { get; set; }
        public string TipoContrato { get; set; }
        public decimal Salario { get; set; }
        public string Localidade { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }
        public string Logradouro { get; set; }
        public string Complemento { get; set; }
        public int? IdEmpresa { get; set; }

        public Empresa IdEmpresaNavigation { get; set; }
        public ICollection<Inscricao> Inscricao { get; set; }
        public ICollection<VagaTecnologia> VagaTecnologia { get; set; }
    }
}
