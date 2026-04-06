import {
  PromotionSchema,
  TiketSchema,
  KategoriSchema,
  BrandHomeSchema,
  SpesialOfficerSchema,
  RiwayatComponetsShcema,
  CreaditCardShema,
  PaymentMethodCardShema,
} from './components';

export interface PromotionSchemaProps {
  data: PromotionSchema;
}

export interface TiketSchemaProps {
  data: TiketSchema;
}

export interface KategoriSchemaProps {
  data: KategoriSchema;
}

export interface BrandHomeSchemaProps {
  data: BrandHomeSchema;
}

export interface SpesialOfficerProps {
  data: SpesialOfficerSchema;
}

export interface RiwayatComponetsProps {
  data: RiwayatComponetsShcema;
}

export interface CreaditCardShemaProps {
  data: CreaditCardShema;
}

export interface PaymentMethodCardProps {
  data: PaymentMethodCardShema;
}
