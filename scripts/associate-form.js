(() => {
  const form = document.getElementById('associate-form');
  if (!form || form.dataset.ready) return;
  form.dataset.ready = 'true';
  const other = form.elements.namedItem('outro');
  const syncValue = () => {
    const selected = form.elements.namedItem('valor').value === 'outro';
    other.required = selected;
    other.disabled = !selected;
  };
  form.addEventListener('change', syncValue);
  syncValue();
  const today = new Date();
  form.elements.namedItem('inscricao').value = [today.getFullYear(), String(today.getMonth()+1).padStart(2,'0'), String(today.getDate()).padStart(2,'0')].join('-');
  form.elements.namedItem('nascimento').max = form.elements.namedItem('inscricao').value;
  form.addEventListener('submit', event => {

    syncValue();
    if (!form.reportValidity()) { event.preventDefault(); return; }
    const data = new FormData(form);
    const get = name => String(data.get(name) || '').trim();
    const date = name => get(name) ? get(name).split('-').reverse().join('/') : 'Não informado';
    const money = Number(get('valor') === 'outro' ? get('outro') : get('valor')).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
    const body = [
      'FICHA DE ASSOCIADO — LAR ITATIBENSE DA CRIANÇA', '',
      'DADOS DO ASSOCIADO', `Data da inscrição: ${date('inscricao')}`,
      `Nome: ${get('nome')}`, `Nascimento: ${date('nascimento')}`,
      ...[['Endereço','endereco'],['Cidade','cidade'],['Estado','estado'],['CEP','cep'],['CPF','cpf'],['RG','rg'],['Celular','celular'],['E-mail','email']].map(([label,name]) => `${label}: ${get(name) || 'Não informado'}`),
      `Desejo receber informações por e-mail: ${get('informacoes') === 'Sim' ? 'Sim' : 'Não'}`, '',
      `Valor da contribuição: ${money}`, `Frequência: ${get('frequencia')}`, '',
      `Nome para confirmação da ficha: ${get('assinatura')}`,
      'Este compromisso é voluntário e sua contribuição depende exclusivamente de sua vontade.'
    ].join('\r\n');
    let summary = form.querySelector('input[name="Resumo da ficha"]');
    if (!summary) {
      summary = document.createElement('input');
      summary.type = 'hidden';
      summary.name = 'Resumo da ficha';
      form.appendChild(summary);
    }
    summary.value = body;
    document.getElementById('associate-status').textContent = 'Encaminhando para a confirmação de envio…';
  });
})();
