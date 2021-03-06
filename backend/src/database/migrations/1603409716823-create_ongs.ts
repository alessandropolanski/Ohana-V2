import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOngs1603409716823 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> { 
    // REALIZAR ALTERACOES
    //CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
    await queryRunner.createTable(new Table ({
      name: 'ongs',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment",
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision:2,

        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision:2,
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        },
        {
          name:'instructions',
          type: 'text'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO NO UP 
    await queryRunner.dropTable('ongs');
  }

}
