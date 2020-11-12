using System;

namespace testeDateTime
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Lingugem fdp");
            DateTime dataInicioEstagio = new DateTime(2019, 9, 10);
            DateTime dataAtual = DateTime.Now;

            var PeriodoDoEstagio = tempoDeEstagio(dataInicioEstagio, dataAtual);
            if (PeriodoDoEstagio == 1)
            {
                Console.WriteLine("{0} Dia", PeriodoDoEstagio);
            }
            else if (PeriodoDoEstagio > 1 && PeriodoDoEstagio < 30)
            {
                Console.WriteLine("{0} Dias", PeriodoDoEstagio);
            }
            else if (PeriodoDoEstagio > 30 && PeriodoDoEstagio < 60)
            {
                Console.WriteLine("{0} Dias, ou {1} mês", PeriodoDoEstagio, PeriodoDoEstagio / 30);
            }
            else
            {
                Console.WriteLine("{0} Dias, ou {1} meses", PeriodoDoEstagio, PeriodoDoEstagio / 30);
            }


            static int tempoDeEstagio(DateTime dataInicioEstagio, DateTime dataAtual)
            {

                long elapsedTicks = dataAtual.Ticks - dataInicioEstagio.Ticks;
                TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);

                Console.WriteLine("Tempo decorrido desde o começo do estágio em {0:f}:",
                                   dataAtual.ToShortDateString());

                double tempoEmDiasDouble = elapsedSpan.TotalDays;
                int tempoEmDiasInt = Convert.ToInt32(tempoEmDiasDouble);
                return tempoEmDiasInt;
            }
        }
    }
}

/*
    int mesAtual = dataAtual.Month;
    int mesInicio = dataInicioEstagio.Month;
    int diaAtual = dataAtual.Day;
    int diaInicio = dataInicioEstagio.Day;
    int anoAtual = dataAtual.Year;
    int anoInicio = dataInicioEstagio.Year;
    int periodoEstagioMes = mesAtual - mesInicio;
    int periodoEstagioDia = diaAtual - diaInicio;
    int periodoEstagioAno = anoAtual - anoInicio;
    TimeSpan periodoEstagio = dataAtual.Subtract(dataInicioEstagio);
    var teste = periodoEstagio.Ticks;
    return new Tuple<int, int, int>(periodoEstagioDia, periodoEstagioMes, periodoEstagioAno);
*/
