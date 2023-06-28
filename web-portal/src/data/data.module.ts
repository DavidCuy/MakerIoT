import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DeviceRepository } from 'src/domain/repositories/device.repository';
import { DeviceIndexUseCase } from 'src/domain/usecases/device/index.usecase';
import { DeviceStoreUseCase } from 'src/domain/usecases/device/store.usecase';
import { DeviceFindUseCase } from 'src/domain/usecases/device/find.usecase';
import { DeviceImplementationRepository } from './repositories/devices/device-implementation.repository';
const deviceIndexUseCaseFactory =
(deviceRepo: DeviceRepository) => new DeviceIndexUseCase(deviceRepo);
export const deviceIndexUseCaseProvider = {
    provide: DeviceIndexUseCase,
    useFactory: deviceIndexUseCaseFactory,
    deps: [DeviceRepository],
};
const deviceStoreUseCaseFactory =
(deviceRepo: DeviceRepository) => new DeviceStoreUseCase(deviceRepo);
export const deviceStoreUseCaseProvider = {
    provide: DeviceStoreUseCase,
    useFactory: deviceStoreUseCaseFactory,
    deps: [DeviceRepository],
};
const deviceFindUseCaseFactory =
(deviceRepo: DeviceRepository) => new DeviceFindUseCase(deviceRepo);
export const deviceFindUseCaseProvider = {
    provide: DeviceFindUseCase,
    useFactory: deviceFindUseCaseFactory,
    deps: [DeviceRepository],
};
@NgModule({
    providers: [
        deviceIndexUseCaseProvider,
        deviceStoreUseCaseProvider,
        deviceFindUseCaseProvider,
        { provide: DeviceRepository, useClass: DeviceImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }
