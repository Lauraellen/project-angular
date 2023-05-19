import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { By } from '@angular/platform-browser';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  //essa função será executada antes de cada um dos blocos de testes
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponent ]
    })

    /**
     * TestBed é o Angular TesteBed, que é responsável pela configuração dos ambientes de teste, como nosso componente 
     * não há dependências nós apenas informamos em declarations o componente que vamos testar.
     */
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //criamos o teste
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
