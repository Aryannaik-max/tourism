import Table from '../components/Table'

const Policy = () => {
    const data = [
        {
            id: 1,
            title:'Jharkhand State Adventure Tourism and Safety Guidline 2024',
            description: 'The compendium relating to "Indian Aventure Tourism Guidelines has been perused. It encompasses Land based, Air based and Water based adventerous activities',
            link:'https://tourism.jharkhand.gov.in/app-assets/rules_policy/guidline.pdf'
        },
        {
            id: 2,
            title: 'The Jharkhand Tourist Trade Registration Rules 2023',
            description: 'ln exercise of the powers conferred under Section 53(1) and 53 (2)(b) to 53(2Xk) of The Jharkhand Tourism Development and Registration Act, 2015, Government of Jharkhand hereby, makes following Rules, to regulate registration of Tourism and travel related business and for determination of registration fee and penalties related to violation of the rules and other conditions.',
            link: 'https://tourism.jharkhand.gov.in/app-assets/rules_policy/rules.pdf'
        },
        {
            id: 3,
            title: 'Jharkhand Tourism Policy 2021',
            description: 'Tourism is essentially an expression of a natural instinct for learning, experience, education and entertainment. The motivating factors for tourism includes social, religious, business interest and quest for knowledge.',
            link: 'https://tourism.jharkhand.gov.in/app-assets/rules_policy/policy.pdf'
        },
        {
            id: 4,
            title: 'Jharkhand State Tourism Awards Guideline 2025',
            description: 'Jharkhand Tourism Implementation Guidelines have been prepared in alignment with the Jharkhand Tourism Policy 2021. As per Clause 34.0 of the Policy, "Awards for Outstanding Performance," the State Government will regularly evaluate the performance of tourism units based on objective evaluation criteria and recognize outstanding achievements in various sectors of tourism.',
            link: 'https://tourism.jharkhand.gov.in/app-assets/rules_policy/Tourism%20-%20AWARDS%20GUIDELINE%202025.pdf'
        },
        {
            id: 5,
            title: 'Jharkhand State Tourism Influencer Engagement Guideline 2025',
            description: 'Jharkhand State Tourism Influencer Engagement Guideline 2025 (Awaiting Suggestion)',
            link: 'https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/news/News20250410_222245.pdf'
        }
    ]

  return (
    <section className="policy-section">
        <div className="banner">
            <h1>Policy and Rules</h1>
        </div>
        <div className="heading">
            <h1>Our Policy, Rules and Guidelines</h1>
        </div>
        <Table data={data} />
    </section>
  )
}

export default Policy