import { site } from "../data/site";
import "./associate-form.css";

const fields = [
  { name: "nome", label: "Nome completo", autoComplete: "name", required: true, wide: true },
  { name: "nascimento", label: "Data de nascimento", type: "date", autoComplete: "bday" },
  { name: "inscricao", label: "Data da inscrição", type: "date" },
  { name: "endereco", label: "Endereço", autoComplete: "street-address", wide: true },
  { name: "cidade", label: "Cidade", autoComplete: "address-level2" },
  { name: "estado", label: "Estado (UF)", autoComplete: "address-level1", maxLength: 2 },
  { name: "cep", label: "CEP", autoComplete: "postal-code", maxLength: 9 },
  { name: "cpf", label: "CPF", maxLength: 14 },
  { name: "rg", label: "RG", maxLength: 20 },
  { name: "celular", label: "Celular", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", required: true, wide: true },
];

export function AssociateForm() {
  return (
    <section className="section associate-section" id="ficha-de-associado" aria-labelledby="associate-title">
      <div className="container section-heading"><p className="eyebrow">Seja associado</p><h2 id="associate-title">Ficha de associado</h2><p>Faça parte dessa rede de apoio ao Lar. Preencha seus dados e escolha como deseja contribuir.</p></div>
      <form className="container associate-form" id="associate-form" action={`mailto:${site.email}`} method="post" encType="text/plain" data-email={site.email}>
        <p className="associate-intro">Os campos com * são obrigatórios. A ficha será encaminhada por você ao e-mail do Lar.</p>
        <fieldset><legend><span>01</span> Dados do associado</legend><div className="associate-fields">
          {fields.map(field => <label key={field.name} className={field.wide ? "associate-wide" : undefined} htmlFor={`associate-${field.name}`}><span>{field.label}{field.required ? " *" : ""}</span><input id={`associate-${field.name}`} name={field.name} type={field.type || "text"} autoComplete={field.autoComplete} required={field.required} maxLength={field.maxLength} /></label>)}
        </div><label className="associate-check"><input type="checkbox" name="informacoes" value="Sim" /><span>Desejo receber informações do Lar Itatibense da Criança por e-mail</span></label></fieldset>
        <fieldset><legend><span>02</span> Valor da contribuição</legend><div className="associate-choices">
          {["50", "60", "70", "outro"].map(value => <label key={value}><input type="radio" name="valor" value={value} required /><span>{value === "outro" ? "Outro valor" : `R$ ${value},00`}</span></label>)}
        </div><label className="associate-other" htmlFor="associate-outro"><span>Outro valor (acima de R$ 80,00)</span><input id="associate-outro" name="outro" type="number" min="80.01" step="0.01" inputMode="decimal" placeholder="R$" /></label></fieldset>
        <fieldset><legend><span>03</span> Frequência da contribuição</legend><div className="associate-choices">
          {["Mensal", "Trimestral", "Semestral", "Anual"].map(value => <label key={value}><input type="radio" name="frequencia" value={value} required /><span>{value}</span></label>)}
        </div></fieldset>
        <fieldset><legend><span>04</span> Confirmação</legend><label className="associate-signature" htmlFor="associate-assinatura"><span>Nome para confirmação da ficha *</span><input id="associate-assinatura" name="assinatura" type="text" required autoComplete="name" /></label><p>Este compromisso é voluntário e sua contribuição depende exclusivamente de sua vontade.</p></fieldset>
        <div className="associate-submit"><p>O botão abre seu aplicativo de e-mail com a ficha preenchida. Revise a mensagem e clique em enviar para concluir. Seus dados não ficam salvos neste site.</p><button className="button button-coral" type="submit">Preparar ficha por e-mail</button><p id="associate-status" role="status" aria-live="polite" /></div>
        <noscript><p>Ative o JavaScript para preparar a mensagem ou entre em contato pelo e-mail <a href={`mailto:${site.email}`}>{site.email}</a>.</p></noscript>
      </form>
      <script src="/scripts/associate-form.js" defer data-associate-form="true" />
    </section>
  );
}
