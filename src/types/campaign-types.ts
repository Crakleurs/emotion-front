export type CampaignInput = {
    hashtag: string;
    creationDate: string;
    name: string;
}

export type CampaignEntity = {
    id: number
    hashtag: string;
    creationDate: string;
    name: string;
    status: boolean;
}
