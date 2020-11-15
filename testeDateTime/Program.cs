using System;

namespace testeDateTime {
    class Program {
        static void Main (string[] args) {

            Console.WriteLine ("Coloque a data de início do estágio (DD/MM/AAAA): ");

            DateTime dataInicioEstagio;
            DateTime dataAtual = DateTime.Now;

            if (DateTime.TryParse (Console.ReadLine (), out dataInicioEstagio)) {
                Console.WriteLine ("A data inserida foi aceita!");

                var PeriodoDoEstagio = tempoDeEstagio (dataInicioEstagio, dataAtual);

                if (PeriodoDoEstagio == 1) 
                {
                    
                } 
                else if (PeriodoDoEstagio > 1 && PeriodoDoEstagio < 30) 
                {
                    Console.WriteLine ("{0} Dias", PeriodoDoEstagio);
                } 
                else if (PeriodoDoEstagio > 30 && PeriodoDoEstagio < 60) 
                {
                    Console.WriteLine ("{0} Dias, ou {1} mês", PeriodoDoEstagio, PeriodoDoEstagio / 30);
                } 
                else if (PeriodoDoEstagio > 365 && PeriodoDoEstagio < 730) 
                {
                    Console.WriteLine ("{0} Dias, ou {1} meses, ou {2} ano", PeriodoDoEstagio, PeriodoDoEstagio / 30, PeriodoDoEstagio / 365);
                } 
                else 
                {
                    Console.WriteLine ("{0} Dias, ou {1} meses, ou {2} anos", PeriodoDoEstagio, PeriodoDoEstagio / 30, PeriodoDoEstagio / 365);
                }

            } 
            else 
            {
                Console.WriteLine ("A data inserida não é válida. Verifique se atende ao padrão (DD/MM/AAAA).");
                Console.WriteLine ("Dica: Coloque as barras, exemplo: 14/11/2020.");
                System.Threading.Thread.Sleep (7000);
                Console.Clear ();
            }
        }
        static int tempoDeEstagio (DateTime dataInicioEstagio, DateTime dataAtual) {

            long elapsedTicks = dataAtual.Ticks - dataInicioEstagio.Ticks;
            TimeSpan elapsedSpan = new TimeSpan (elapsedTicks);

            Console.WriteLine ("Tempo decorrido, desde o começo do estágio em {0:f}:", dataInicioEstagio.ToShortDateString ());

            double tempoEmDiasDouble = elapsedSpan.TotalDays;
            int tempoEmDiasInt = Convert.ToInt32 (tempoEmDiasDouble);
            return tempoEmDiasInt;
        }
    }
}