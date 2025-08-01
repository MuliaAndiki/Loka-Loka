import Container from '@/app/ui/container';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/app/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/ui/select';
import PopUp from '@/app/core/components/pop-up';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import LocationMarker from '@/app/core/components/locationMarker';
import { PROVINCE_CENTERS } from '@/app/core/constants/province-center';
import { EditProfileFormProps } from '@/app/types/components';
import { Button } from '@/app/ui/button';
import Fallback from '@/app/ui/fallback';
import L from 'leaflet';

const EditProfileForm = ({
  formEditProfile,
  setFormEditProfile,
  handleChangeGender,
  handleOpenModal,
  isActive,
  setIsActive,
  markerRef,
  alert,
  handleEditProfile,
  isPending,
  center,
}: EditProfileFormProps) => {
  return (
    <Container className="w-full h-full">
      <Container className="flex justify-center items-center flex-col">
        <Container className="mb-6 w-full  max-w-4/5 flex justify-center items-center flex-col ">
          <Container className="w-full justify-center items-start flex flex-col mb-6 gap-2">
            <Label className="font-semibold text-lg md:text-4xl">Nama Lengkap :</Label>
            <Input
              className=""
              placeholder="*Contoh: Udin Sahputra"
              value={formEditProfile.fullname}
              onChange={(e) =>
                setFormEditProfile((prev) => {
                  const newObj = { ...prev, fullname: e.target.value };
                  return newObj;
                })
              }
            />
          </Container>
          <Container className="w-full justify-center items-start flex flex-col mb-6 gap-2">
            <Label className="font-semibold text-lg md:text-4xl">Email :</Label>
            <Input
              className=""
              inputMode="email"
              placeholder="*Contoh: UdinSahputra@example.com"
              value={formEditProfile.email}
              onChange={(e) =>
                setFormEditProfile((prev) => {
                  const newObj = { ...prev, email: e.target.value };
                  return newObj;
                })
              }
            />
          </Container>
          <Container className="w-full justify-center items-start flex flex-col mb-6 gap-2">
            <Label className="font-semibold text-lg md:text-4xl">Nomor HandPhone :</Label>
            <Input
              className=""
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="*Contoh: 084321132"
              value={formEditProfile.phoneNumber}
              onChange={(e) =>
                setFormEditProfile((prev) => {
                  const newObj = { ...prev, phoneNumber: e.target.value };
                  return newObj;
                })
              }
            />
          </Container>
          <Container className="w-full justify-center items-start flex flex-col gap-2">
            <Label className=" font-semibold text-lg md:text-4xl">Gender :</Label>
            <Select onValueChange={handleChangeGender} value={String(formEditProfile.gender)}>
              <SelectTrigger className="w-full mb-6">
                <SelectValue placeholder="*Contoh: Laki - Laki" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Laki-Laki</SelectItem>
                <SelectItem value="false">Perempuan</SelectItem>
              </SelectContent>
            </Select>
          </Container>

          <Container className="w-full justify-center items-start flex flex-col gap-2">
            <Label className=" font-semibold text-lg md:text-4xl">Lokasi :</Label>
            <Select
              onValueChange={(value) => handleOpenModal(value)}
              value={formEditProfile.provinsi ?? ''}
            >
              <SelectTrigger className="w-full mb-6">
                <SelectValue placeholder="*Contoh: Jawa Barat" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(PROVINCE_CENTERS).map((prev) => (
                  <SelectItem key={prev} value={prev}>
                    {prev}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Container>

          <PopUp isOpen={isActive === 'Location'} onClose={() => setIsActive(null)}>
            <Container className="overflow-hidden w-full h-[400px]">
              <MapContainer
                center={center}
                zoom={6}
                scrollWheelZoom={true}
                className="h-full w-full z-0"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <LocationMarker markerRef={markerRef} />

                {formEditProfile.lat && formEditProfile.lng && (
                  <Marker
                    position={[formEditProfile.lat, formEditProfile.lng]}
                    icon={L.icon({
                      iconUrl: '/asset/map-pin.svg',
                      iconSize: [25, 41],
                      iconAnchor: [12, 41],
                    })}
                    ref={(ref) => {
                      if (ref) markerRef.current = ref;
                    }}
                  />
                )}
              </MapContainer>
            </Container>

            <Container className="text-sm text-foreground font-semibold my-2">
              Lokasi Anda: {formEditProfile.lat}, {formEditProfile.lng}
            </Container>

            <Container className="flex justify-around items-center">
              <Button
                variant="destructive"
                className="font-semibold"
                onClick={() => {
                  if (markerRef.current) {
                    const { lat, lng } = markerRef.current.getLatLng();
                    setFormEditProfile((prev) => ({ ...prev, lat, lng }));
                    setIsActive(null);
                  }
                }}
              >
                Konfirmasi
              </Button>
              <Button
                variant="secondary"
                className="font-semibold"
                onClick={() => setIsActive(null)}
              >
                Batalkan
              </Button>
            </Container>
          </PopUp>

          <Button
            className="w-full mb-10 "
            onClick={() =>
              alert.modal({
                title: 'Edit Profile',
                deskripsi: 'Anda Mengupdate Profile Anda?',
                icon: 'question',
                onConfirm: () => {
                  handleEditProfile();
                },
              })
            }
            disabled={isPending}
          >
            {isPending ? <Fallback title="Tunggu Sebentar" /> : 'Update Profile'}
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default EditProfileForm;
