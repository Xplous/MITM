export interface ProductInterface {
    id: number;
    title: string;
    slug: string;
    showInMenu?: unknown;
    studyFormat: string;
    goal: string;
    description: string;
    price: number;
    discount: number;
    subjectsStickerType: string;
    copyToKk?: unknown;
    study_field: Studyfield;
    category: Category;
    icon?: unknown;
    metaTitle: string;
    metaDescription: string;
    locale: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    isActive: boolean;
    program?: unknown;
    new?: unknown;
    hit: boolean;
    frdo?: unknown;
    employment?: unknown;
    MetaNoindex?: unknown;
    MetaNofollow?: unknown;
    whatWillYouLearn: WhatWillYouLearn[];
    specializedSubjects: SpecializedSubject[];
    duration: Duration;
    baseSubjects: SpecializedSubject[];
    programModulesCounters: ProgramModulesCounters;
    diplomas: Diploma[];
    whoIsFor: WhoIsFor[];
    specializedSubjectsAddons?: unknown;
    actualInformation: ActualInformation;
    bonusSubjects: BonusSubject[];
    heroAdvantages: unknown[];
    partnership?: unknown;
    programReviews: unknown[];
    faq: unknown[];
    WhatWillYouLearnNew: WhatWillYouLearnNew[];
    futureJob: FutureJob;
    tarifs?: unknown;
    picture: Picture;
    whatWillYouLearnPhoto?: unknown;
    prosPhoto?: unknown;
    programDescPhoto?: unknown;
    teachers: Teacher[];
    questions: unknown[];
    journal_articles: Journalarticle[];
    recommendedPrograms: unknown[];
    leadTeacher: unknown[];
    localizations: unknown[];
}

export interface Journalarticle {
    id: number;
    title: string;
    slug: string;
    journal_category: number;
    shortDescription?: unknown;
    metaDescription: string;
    metaTitle: string;
    noindex: boolean;
    nofollow: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    publicationDate: string;
    articleBody: ArticleBody[];
    picture: Picture;
    pdfMaterials: PdfMaterial[];
}

export interface ArticleBody {
    __component: string;
    id: number;
    title?: string;
    hType?: string;
    titleBody?: TitleBody[];
    paragraphBody?: ParagraphBody[];
    tag?: string | string;
    listItem?: ListItem[];
    emphasisBody?: string;
    picture?: Portrait;
    jrnl_articles?: Jrnlarticle[];
    htmlTable?: PdfMaterial;
    btnVal?: string;
    sectionTitle?: SectionTitle[];
    shortTextAtTheBottom?: ShortTextAtTheBottom[];
    programs?: Program[];
    item?: Item[];
}

export interface Item {
    id: number;
    title?: unknown;
    body: string;
}

export interface Program {
    id: number;
    title: string;
    slug: string;
    showInMenu?: unknown;
    studyFormat: string;
    goal: string;
    description: string;
    price: number;
    discount: number;
    subjectsStickerType: string;
    copyToKk?: unknown;
    study_field: number;
    category: number;
    icon?: unknown;
    metaTitle: string;
    metaDescription: string;
    locale: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    isActive: boolean;
    program?: unknown;
    new?: unknown;
    hit: boolean;
    frdo?: unknown;
    employment?: unknown;
    MetaNoindex?: unknown;
    MetaNofollow?: unknown;
    picture: Picture;
    whatWillYouLearnPhoto?: unknown;
    prosPhoto?: unknown;
    programDescPhoto?: unknown;
}

export interface ShortTextAtTheBottom {
    id: number;
    title?: unknown;
    text: string;
    isHighlighted?: unknown;
    isLarger?: unknown;
}

export interface SectionTitle {
    id: number;
    text: string;
    isHighlighted?: (boolean | null)[];
}

export interface Jrnlarticle {
    id: number;
    title: string;
    slug: string;
    journal_category: number;
    shortDescription?: (null | string)[];
    metaDescription: string;
    metaTitle: string;
    noindex: boolean;
    nofollow: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    publicationDate?: ((null | string)[] | string)[] | null;
    picture: Picture;
    pdfMaterials: PdfMaterial[];
}

export interface PdfMaterial {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width?: unknown;
    height?: unknown;
    formats?: unknown;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: unknown;
    provider: string;
    provider_metadata: Providermetadata;
    created_at: string;
    updated_at: string;
}

export interface ListItem {
    id: number;
    title?: ((null | string)[] | null)[];
    body: string;
}

export interface ParagraphBody {
    id: number;
    title?: (null | string)[];
    text: string;
    isHighlighted?: unknown;
    isLarger?: unknown;
}

export interface TitleBody {
    id: number;
    text: string;
    isHighlighted?: unknown;
}

export interface Teacher {
    id: number;
    name: string;
    description: string;
    slug: string;
    copyToKk: boolean;
    locale: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    descriptionItems: DescriptionItem[];
    portrait: Portrait;
}

export interface Portrait {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats2;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: unknown;
    provider: string;
    provider_metadata: Providermetadata;
    created_at: string;
    updated_at: string;
}

export interface Formats2 {
    large?: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

export interface DescriptionItem {
    id: number;
    item?: string | string;
}

export interface Picture {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: unknown;
    provider: string;
    provider_metadata: Providermetadata;
    created_at: string;
    updated_at: string;
}

export interface Formats {
    large: Large;
    small: Large;
    medium: Large;
    thumbnail: Large;
}

export interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: unknown;
    size: number;
    width: number;
    height: number;
    provider_metadata: Providermetadata;
}

export interface Providermetadata {
    public_id: string;
    resource_type: string;
}

export interface FutureJob {
    id: number;
    futureJobSalary?: unknown;
    job: Job[];
}

export interface Job {
    id: number;
    title: string;
    string: string;
}

export interface WhatWillYouLearnNew {
    id: number;
    title?: unknown;
    string: string;
}

export interface BonusSubject {
    id: number;
    string?: unknown;
    title: string;
    duration: number;
    new: boolean;
    skills: Skill[];
}

export interface ActualInformation {
    id: number;
    paragraph?: unknown;
    description: string;
    actualPhoto1?: unknown;
    actualPhoto2?: unknown;
}

export interface WhoIsFor {
    id: number;
    name: string;
    description: string;
}

export interface Diploma {
    id: number;
    name?: unknown;
    diploma: unknown[];
}

export interface ProgramModulesCounters {
    id: number;
    leftCounter: string;
    rightCounter: string;
}

export interface Duration {
    id: number;
    studyHours?: unknown;
    minStudyMonths?: unknown;
    practicalLessons: number;
    workshops: number;
    modulesDescription: string;
    modulesResult: string;
    videomaterials: number;
    modulesTools: unknown[];
}

export interface SpecializedSubject {
    id: number;
    string: string;
    title: string;
    duration: number;
    new?: unknown;
    skills: Skill[];
}

export interface Skill {
    id: number;
    title: string;
    string: string;
    new?: unknown;
}

export interface WhatWillYouLearn {
    id: number;
    string: string;
    title?: unknown;
    duration?: unknown;
    new?: unknown;
    skills: unknown[];
}

export interface Category {
    id: number;
    type: string;
    slug: string;
    copyToKk: boolean;
    description: string;
    locale: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    labelCases: LabelCases;
}

export interface LabelCases {
    id: number;
    singular: string;
    plural: string;
}

export interface Studyfield {
    id: number;
    name: string;
    description: string;
    copyToKk: boolean;
    slug: string;
    locale: string;
    published_at: string;
    created_at: string;
    updated_at: string;
}